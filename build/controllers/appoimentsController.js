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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointmentByUserId = exports.updateAppointmentById = exports.create = void 0;
const Appointment_1 = require("../models/Appointment");
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const custumer_id = req.token.id;
        const tattoo_artist_id = req.body.tattoo_artist_id;
        const date = req.body.date;
        const newCustomer = yield Appointment_1.Appointment.create({
            customer_id: custumer_id,
            tattoo_artist_id: tattoo_artist_id,
            date: date
        }).save();
        return res.json({
            success: true,
            message: "Appoiment created succesfully",
            token: newCustomer
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appoiment cant be created",
            error: error
        });
    }
});
exports.create = create;
const updateAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tattoo_artist_id = req.body.tattoo_artist_id;
        const status = req.body.status;
        const date = req.body.date;
        const appoimentId = req.params.id;
        const appointment = yield Appointment_1.Appointment.findOneBy({
            id: parseInt(appoimentId),
            customer_id: req.token.id
        });
        if (!appointment) {
            return res.status(404).json({
                success: true,
                message: "appointment by user doesnt found and cant updated",
            });
        }
        const updateAppointment = yield Appointment_1.Appointment.update({
            id: parseInt(appoimentId)
        }, {
            tattoo_artist_id: tattoo_artist_id,
            status: status,
            date: date
        });
        return res.json({
            success: true,
            message: "Appointment updated",
            data: updateAppointment
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "Appointment cant by updated",
            error: error
        });
    }
});
exports.updateAppointmentById = updateAppointmentById;
const deleteAppointmentByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentToRemove = yield Appointment_1.Appointment.findOneBy({
            customer_id: req.token.id,
            id: req.body.id
        });
        if (appointmentToRemove) {
            yield Appointment_1.Appointment.remove(appointmentToRemove);
        }
        return res.json({
            success: true,
            message: "Appointment deleted",
            data: appointmentToRemove,
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "Appointment cant by deleted",
            error: error,
        });
    }
});
exports.deleteAppointmentByUserId = deleteAppointmentByUserId;
