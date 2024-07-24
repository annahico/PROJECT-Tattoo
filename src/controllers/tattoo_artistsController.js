"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAppointment = exports.updateAdminCustomers = exports.updateAdmin = exports.getAllCustomers = exports.getAllTattooArtist = exports.getAllAppointmentByTattooArtistId = exports.update = exports.profile = exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Tattoo_artist_1 = require("../models/Tattoo_artist");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Appointment_1 = require("../models/Appointment");
const Customer_1 = require("../models/Customer");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const surname = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            return res.json({ mensaje: 'The email entered is not valid' });
        }
        const passswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{4,12}$/;
        if (!passswordRegex.test(password)) {
            return res.json({ mensaje: 'Invalid password' });
        }
        const encryptedPassword = bcrypt_1.default.hashSync(password, 10);
        const newCustomer = yield Tattoo_artist_1.Tattoo_artist.create({
            name: name,
            surname: surname,
            email: email,
            password: encryptedPassword
        }).save();
        return res.json({
            success: true,
            message: "Customer account created succesfully",
            token: newCustomer
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Tattoo artist account cant be created",
            error: error
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = yield Tattoo_artist_1.Tattoo_artist.findOneBy({
            email: email
        });
        if (!user) {
            return res.status(400).json({
                success: true,
                message: 'Email or password incorrect'
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            role: user.role,
            email: user.email
        }, "secreto", {
            expiresIn: "3h",
        });
        return res.json({
            success: true,
            message: "User logged succesfully",
            token: token
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        });
    }
});
exports.login = login;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Tattoo_artist_1.Tattoo_artist.findOneBy({
            id: req.token.id
        });
        return res.json({
            success: true,
            message: "profile user retrieved",
            data: user
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "User profile cant be retrieved",
            error: error
        });
    }
});
exports.profile = profile;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, surname, email, password } = req.body;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            return res.json({ mensaje: 'The email entered is not valid' });
        }
        const passswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{4,12}$/;
        if (!passswordRegex.test(password)) {
            return res.json({ mensaje: 'Invalid password' });
        }
        const encryptedPassword = bcrypt_1.default.hashSync(password, 10);
        const updateCustomer = yield Tattoo_artist_1.Tattoo_artist.update({
            id: req.token.id
        }, {
            name: name,
            surname: surname,
            email: email,
            password: encryptedPassword
        });
        return res.json({
            success: true,
            message: "User updated",
            data: updateCustomer
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "User information cant by updated",
            error: error
        });
    }
});
exports.update = update;
const getAllAppointmentByTattooArtistId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appoimentId = req.params.id;
        const appointment = yield Appointment_1.Appointment.find({
            where: {
                tattoo_artist_id: req.token.id
            },
            select: {
                id: true,
                customer_id: true,
                status: true,
                date: true,
                customer: {
                    name: true,
                    surname: true,
                    email: true,
                    password: false
                }
            },
            relations: {
                customer: true,
            },
        });
        return res.json({
            success: true,
            message: "appointments by tattoo artist retrieved",
            data: appointment
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "appointments cant by tattoo artist retrieved",
            error: error
        });
    }
});
exports.getAllAppointmentByTattooArtistId = getAllAppointmentByTattooArtistId;
const getAllTattooArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tattoo_artists = yield Tattoo_artist_1.Tattoo_artist.find({
            select: {
                name: true,
                surname: true,
                email: true,
            }
        });
        return res.json({
            success: true,
            message: "users retrieved",
            data: tattoo_artists
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "users cant be retrieved",
            error: error
        });
    }
});
exports.getAllTattooArtist = getAllTattooArtist;
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield Customer_1.Customer.find({
            select: {
                id: true,
                name: true,
                surname: true,
                email: true,
                role: true,
                is_active: true,
                created_at: true,
                updated_at: true
            }
        });
        return res.json({
            success: true,
            message: "users retrieved",
            data: customers
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "users cant be retrieved",
            error: error
        });
    }
});
exports.getAllCustomers = getAllCustomers;
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, is_active } = req.body;
        const updateTattoo_artist = yield Tattoo_artist_1.Tattoo_artist.update({
            id: req.body.id
        }, {
            role: role,
            is_active: is_active
        });
        return res.json({
            success: true,
            message: "User updated",
            data: updateTattoo_artist
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "User information cant by updated",
            error: error
        });
    }
});
exports.updateAdmin = updateAdmin;
const updateAdminCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { is_active } = req.body;
        const updateCustomer = yield Customer_1.Customer.update({
            id: req.body.id
        }, {
            is_active: is_active
        });
        return res.json({
            success: true,
            message: "User updated",
            data: updateCustomer
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "User information cant by updated",
            error: error
        });
    }
});
exports.updateAdminCustomers = updateAdminCustomers;
const getAllAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appoimentId = req.params.id;
        const appointment = yield Appointment_1.Appointment.find({
            select: {
                id: true,
                customer_id: true,
                status: true,
                date: true,
                customer: {
                    name: true,
                    surname: true,
                    email: true,
                    password: false
                },
                tattoo_artist: {
                    name: true,
                    surname: true,
                    email: true
                }
            },
            relations: {
                customer: true,
                tattoo_artist: true
            },
        });
        return res.json({
            success: true,
            message: "appointments by tattoo artist retrieved",
            data: appointment
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "appointments cant by tattoo artist retrieved",
            error: error
        });
    }
});
exports.getAllAppointment = getAllAppointment;
