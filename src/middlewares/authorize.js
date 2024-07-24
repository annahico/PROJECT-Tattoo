module.exports = (...allowedRoles) => {
    return (req, res, next) => {
        const userRoleName = req.tokenData.userRoleName;

        // Roles that always have access
        const adminGroupRoles = ["Owner"];

        // Allow access if user belongs to allowed roles or admin group
        if (allowedRoles.includes(userRoleName) || adminGroupRoles.includes(userRoleName)) {
            return next();
        }

        // If none of the conditions are met, reject the request
        res.status(403).json({
            success: false,
            message: "Forbidden access",
        });
    };
};
