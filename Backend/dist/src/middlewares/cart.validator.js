"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAddToCart = void 0;
const express_validator_1 = require("express-validator");
const mongoose_1 = __importDefault(require("mongoose"));
exports.validateAddToCart = [
    (0, express_validator_1.body)("productId")
        .notEmpty()
        .withMessage("El id del producto es obligatorio")
        .custom((value) => mongoose_1.default.Types.ObjectId.isValid(value))
        .withMessage("El id del producto no es válido"),
    (0, express_validator_1.body)("quantity")
        .notEmpty()
        .withMessage("La cantidad es obligatoria")
        .isInt({ min: 1 })
        .withMessage("La cantidad debe ser un número entero mayor o igual a 1"),
];
