import { body } from "express-validator";
import mongoose from "mongoose";

export const validateAddToCart = [
  body("productId")
    .notEmpty()
    .withMessage("El id del producto es obligatorio")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("El id del producto no es válido"),

  body("quantity")
    .notEmpty()
    .withMessage("La cantidad es obligatoria")
    .isInt({ min: 1 })
    .withMessage("La cantidad debe ser un número entero mayor o igual a 1"),
];
