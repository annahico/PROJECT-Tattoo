const { User, Role } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {};

authController.register = async (req, res) => {
    try {
        const { first_name, email, password } = req.body;

        if (!first_name || !email || !password) {
            return res.status(400).json({
                success: true,
                message: "Invalid registration fields",
            });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        await User.create({
            first_name,
            email,
            password: hashedPassword,
            role_id: 3, // user role
        });

        res.status(200).json({
            success: true,
            message: `User registered successfully`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message,
        });
    }
};

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({
                success: true,
                message: "email and password are required",
            });
        }

        const user = await User.findOne({
            include: [
                {
                    model: Role,
                    as: "role",
                },
            ],
            where: { email },
        });

        if (!user) {
            return res
                .status(400)
                .json({ success: true, message: "Bad credentials" });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res
                .status(400)
                .json({ success: true, message: "Bad credentials" });
        }

        const tokenPayload = {
            userId: user.id,
            userRoleName: user.role.name,
        };

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
            expiresIn: "3h",
        });

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Login failed",
            error: error.message,
        });
    }
};

module.exports = authController;