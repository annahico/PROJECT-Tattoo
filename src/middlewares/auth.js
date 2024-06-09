const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing",
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Attach the decoded token data to the request object
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
