"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrder = void 0;
const express_validator_1 = require("express-validator");
exports.validateOrder = [
    (0, express_validator_1.body)("items")
        .isArray({ min: 1 })
        .withMessage("Debe enviar al menos un item en la orden"),
    (0, express_validator_1.body)("items.*.product")
        .notEmpty()
        .withMessage("El id del producto es obligatorio")
        .isMongoId()
        .withMessage("El id del producto no es válido"),
    (0, express_validator_1.body)("items.*.quantity")
        .isInt({ min: 1 })
        .withMessage("La cantidad debe ser un número entero mayor o igual a 1"),
    (0, express_validator_1.body)("total").isNumeric().withMessage("El total debe ser un número"),
];
