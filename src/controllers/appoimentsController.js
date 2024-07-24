"use strict";

let __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(resolve => { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointmentByUserId = exports.updateAppointmentById = exports.create = void 0;

const { Appointment } = require("../models/Appointment");

const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer_id = req.token.id;
        const { tattoo_artist_id, date } = req.body;

        const newAppointment = yield Appointment.create({
            customer_id,
            tattoo_artist_id,
            date
        }).save();

        return res.json({
            success: true,
            message: "Appointment created successfully",
            token: newAppointment
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointment can't be created",
            error
        });
    }
});

exports.create = create;

const updateAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tattoo_artist_id, status, date } = req.body;
        const appointmentId = parseInt(req.params.id);

        const appointment = yield Appointment.findOneBy({
            id: appointmentId,
            customer_id: req.token.id
        });

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found and can't be updated",
            });
        }

        yield Appointment.update({ id: appointmentId }, { tattoo_artist_id, status, date });

        return res.json({
            success: true,
            message: "Appointment updated",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointment can't be updated",
            error
        });
    }
});

exports.updateAppointmentById = updateAppointmentById;

const deleteAppointmentByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentToRemove = yield Appointment.findOneBy({
            customer_id: req.token.id,
            id: req.body.id
        });

        if (appointmentToRemove) {
            yield Appointment.remove(appointmentToRemove);
            return res.json({
                success: true,
                message: "Appointment deleted",
                data: appointmentToRemove,
            });
        }

        return res.status(404).json({
            success: false,
            message: "Appointment not found",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Appointment can't be deleted",
            error,
        });
    }
});

exports.deleteAppointmentByUserId = deleteAppointmentByUserId;
