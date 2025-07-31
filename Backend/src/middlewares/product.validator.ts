import { body } from "express-validator";

export const productValidator = [
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage("El precio debe ser un número mayor a 0"),

  body("description")
    .optional()
    .isString()
    .withMessage("La descripción debe ser un texto válido"),

  body("category")
    .optional()
    .isString()
    .withMessage("La categoría debe ser un texto válido"),

  body("image")
    .optional()
    .isString()
    .withMessage("La imagen debe ser un texto o URL válido"),
];
