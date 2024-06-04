const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Modify request object to include payload
        req.tokenData = {
            userId: decoded.userId,
            userRoleName: decoded.userRoleName,
        };

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token provided",
        });
    }
};

module.exports = auth;
