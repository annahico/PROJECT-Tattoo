const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Modificar el objeto request para incluir los datos del token
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
