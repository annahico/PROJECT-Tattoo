const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config(); // Para usar variables de entorno

const authController = {};

authController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validar entrada
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Buscar usuario por email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Crear token
    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.name,
        roleId: user.role_id,
        userSurnames: user.surnames,
        userPhone: user.phone,
        userEmail: user.email,
      },
      process.env.JWT_SECRET, // Usar variable de entorno
      {
        expiresIn: "3h",
      }
    );

    return res.json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error("Login error:", error); // Log para depuración
    return res.status(500).json({
      success: false,
      message: "Unable to log in the user",
      error: error.message,
    });
  }
};

module.exports = authController;
