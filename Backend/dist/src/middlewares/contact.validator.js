"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContact = void 0;
const express_validator_1 = require("express-validator");
exports.validateContact = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isString()
        .withMessage("El nombre debe ser un texto válido"),
    (0, express_validator_1.body)("surname")
        .notEmpty()
        .withMessage("El apellido es obligatorio")
        .isString()
        .withMessage("El apellido debe ser un texto válido"),
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .isEmail()
        .withMessage("Debe ser un email válido"),
    (0, express_validator_1.body)("phone")
        .notEmpty()
        .withMessage("El teléfono es obligatorio")
        .isString()
        .withMessage("El teléfono debe ser un texto válido"),
    (0, express_validator_1.body)("message")
        .notEmpty()
        .withMessage("El mensaje es obligatorio")
        .isString()
        .withMessage("El mensaje debe ser un texto válido"),
];
