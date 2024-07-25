const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to continue",
      });
    }

    const token = bearerToken.split(" ")[1];

    const decoded = jwt.verify(token, "kant");

    req.userId = decoded.userId;
    req.roleId = decoded.roleId;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
      error: error.message,
    });
  }
};

module.exports = auth;
