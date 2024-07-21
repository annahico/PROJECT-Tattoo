"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const typeorm_1 = require("typeorm");
const Customer_1 = require("./Customer");
const Tattoo_artist_1 = require("./Tattoo_artist");
let Appointment = class Appointment extends typeorm_1.BaseEntity {
};
exports.Appointment = Appointment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "customer_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "tattoo_artist_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Appointment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Appointment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customer_1.Customer, (customer) => customer.appoiments),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", Customer_1.Customer)
], Appointment.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tattoo_artist_1.Tattoo_artist, (tattoo_artist) => tattoo_artist.appoiments),
    (0, typeorm_1.JoinColumn)({ name: "tattoo_artist_id" }),
    __metadata("design:type", Tattoo_artist_1.Tattoo_artist)
], Appointment.prototype, "tattoo_artist", void 0);
exports.Appointment = Appointment = __decorate([
    (0, typeorm_1.Entity)("appointments")
], Appointment);
