const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/userController');
const auth = require("../../middlewares/auth");
const authorize = require("../../middlewares/authorize");

// Route to get user profile
router.get("/profile", auth, ctrl.getUserProfile);

// Route to update user profile
router.put("/profile", auth, ctrl.updateUserProfile);

// Route to get all users or user by email (for Super Admin)
router.get("/", auth, authorize("Super Admin"), (req, res, next) => {
    // If the 'email' query parameter is present, direct the request to getByEmail method
    if (req.query.email) {
        return ctrl.getByEmail(req, res, next);
    }
    // If no 'email' parameter, direct the request to getAll method
    return ctrl.getAll(req, res, next);
});

// Route to update user role by id (for Super Admin)
router.put("/:id/:role", auth, authorize("Super Admin"), ctrl.update);

// Route to delete user by id (for Super Admin)
router.delete("/:id", auth, authorize("Super Admin"), ctrl.delete);


router.get("/tattoo_artist", auth, ctrl.getTattooArtist);

module.exports = router;