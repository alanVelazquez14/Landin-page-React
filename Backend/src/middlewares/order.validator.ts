import { body } from "express-validator";

export const validateOrder = [
  body("items")
    .isArray({ min: 1 })
    .withMessage("Debe enviar al menos un item en la orden"),

  body("items.*.product")
    .notEmpty()
    .withMessage("El id del producto es obligatorio")
    .isMongoId()
    .withMessage("El id del producto no es válido"),

  body("items.*.quantity")
    .isInt({ min: 1 })
    .withMessage("La cantidad debe ser un número entero mayor o igual a 1"),

  body("total").isNumeric().withMessage("El total debe ser un número"),
];
