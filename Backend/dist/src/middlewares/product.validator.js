"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidator = void 0;
const express_validator_1 = require("express-validator");
exports.productValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
    (0, express_validator_1.body)("price")
        .isFloat({ gt: 0 })
        .withMessage("El precio debe ser un número mayor a 0"),
    (0, express_validator_1.body)("description")
        .optional()
        .isString()
        .withMessage("La descripción debe ser un texto válido"),
    (0, express_validator_1.body)("category")
        .optional()
        .isString()
        .withMessage("La categoría debe ser un texto válido"),
    (0, express_validator_1.body)("image")
        .optional()
        .isString()
        .withMessage("La imagen debe ser un texto o URL válido"),
];
