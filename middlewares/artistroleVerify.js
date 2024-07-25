const isArtist = (req, res, next) => {
  try {
    if (req.roleId !== 3) {
      return res.status(501).json({
        success: true,
        message: "You do not have permission to perform this action",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Action could not be performed",
      error: error.message,
    });
  }
};

module.exports = isArtist;
