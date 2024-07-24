"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const admin = (req, res, next) => {
    if (req.token.role !== "super_admin" && req.token.role !== "admin") {
        return res.json('User not authorized');
    }
    next();
};
exports.admin = admin;
