const isArtist = (req, res, next) => {
    try {
        if (req.roleId !== 3) {
            return res.status(403).json({
                success: false,
                message: "You do not have permission to perform this action",
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to perform the action",
            error: error.message,
        });
    }
};

module.exports = isArtist;
