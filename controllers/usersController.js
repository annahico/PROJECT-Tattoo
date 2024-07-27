const { User } = require("../models");
const bcrypt = require('bcrypt');

const usersController = {};

// Get all users
usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: ['password'] } // Exclude passwords from the response
    });

    return res.json({
      success: true,
      message: "All user data retrieved successfully",
      data: allUsers,
    });
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve user data",
      error: error.message,
    });
  }
};

// Create a new user
usersController.createNewUser = async (req, res) => {
  const { role_id, name, surnames, email, phone, password } = req.body;

  // Validate inputs
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address",
    });
  }

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must have an uppercase letter, a lowercase letter, and a number. It must be at least 4 characters long.",
    });
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = await User.create({
      role_id,
      name,
      surnames,
      email,
      phone,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });

  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to create account",
      error: error.message,
    });
  }
};

// Modify user details
usersController.modifyUser = async (req, res) => {
  const { id, role_id, name, surnames, email, phone, password } = req.body;

  // Validate inputs
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "User ID is required",
    });
  }

  try {
    const updateFields = {
      role_id,
      name,
      surnames,
      email,
      phone
    };

    // Only hash the password if it's provided
    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 8);
      updateFields.password = hashedPassword;
    }

    const [updated] = await User.update(updateFields, {
      where: { id }
    });

    if (updated === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      message: "User updated successfully",
      data: {
        roleId: role_id,
        userId: id,
        userName: name,
        userSurnames: surnames,
        userPhone: phone,
        userEmail: email,
      },
    });

  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to update user data",
      error: error.message,
    });
  }
};

// Delete a user
usersController.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "User ID is required",
    });
  }

  try {
    const deleted = await User.destroy({
      where: { id }
    });

    if (deleted === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to delete user",
      error: error.message,
    });
  }
};

module.exports = usersController;
