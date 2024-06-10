const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/userController');
const auth = require("../../middlewares/auth");
const authorize = require("../../middlewares/authorize");


router.get("/profile", auth, ctrl.getUserProfile); 
router.put("/profile", auth, ctrl.updateUserProfile);
router.get("/", auth, authorize("Super_Admin"), (req, res, next) => {
    if (req.query.email) {
        return ctrl.getByEmail(req, res, next);
    }
    return ctrl.getAll(req, res, next);
});

router.put("/:id/:role", auth, authorize("Super_Admin"), ctrl.update);
router.delete("/:id", auth, authorize("Super_Admin"), ctrl.delete); 
router.get("/tattoo_artist", auth, ctrl.getTattooArtist);

module.exports = router;