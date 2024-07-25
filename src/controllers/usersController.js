const { User } = require("../models");
const bcrypt = require('bcrypt');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();

    return res.json({
      success: true,
      message: "All user data retrieved successfully",
      data: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve user data",
      error: error.message,
    });
  }
};

usersController.createNewUser = async (req, res) => {
  try {
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/;

    if (!checkEmail.test(req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (!regex.test(req.body.password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must have an uppercase letter, a lowercase letter, and a number. It must be at least 4 characters long.",
      });
    }

    const newPassword = bcrypt.hashSync(req.body.password, 8);

    const newUser = await User.create({
      role_id: req.body.role_id,
      name: req.body.name,
      surnames: req.body.surnames,
      email: req.body.email,
      phone: req.body.phone,
      password: newPassword,
    });

    return res.send(newUser);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create account",
      error: error.message,
    });
  }
};

usersController.modifyUser = async (req, res) => {
  let body = req.body;

  try {
    const updateUser = await User.update(
      {
        role_id: req.body.role_id,
        name: req.body.name,
        surnames: req.body.surnames,
        email: req.body.email,
        phone: req.body.phone,
      },
      {
        where: {
          id: body.id,
        },
      }
    );

    const dataAnswer = {
      roleId: req.body.role_id,
      userId: body.id,
      userName: req.body.name,
      userSurnames: req.body.surnames,
      userPhone: req.body.phone,
      userEmail: req.body.email,
    };

    return res.json({
      success: true,
      message: "User updated successfully",
      data: dataAnswer,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to update user data",
      error: error.message,
    });
  }
};

usersController.deleteUser = async (req, res) => {
  let body = req.body;

  try {
    const deleteUser = await User.destroy({
      where: {
        id: body.id,
      },
    });
    return res.json({
      success: true,
      message: "User deleted successfully",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to delete user",
      error: error.message,
    });
  }
};

module.exports = usersController;
