const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authController = {};

authController.login = async (req, res) => {
  try {
    // Collect email and password
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or email",
      });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password or username",
      });
    }
    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.name,
        roleId: user.role_id,
        userSurnames: user.surnames,
        userPhone: user.phone,
        userEmail: user.email
      },
      "secret_key",
      {
        expiresIn: "4h",
      }
    );

    return res.json({
      success: true,
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to log in the user",
      error: error.message,
    });
  }
};

module.exports = authController;
