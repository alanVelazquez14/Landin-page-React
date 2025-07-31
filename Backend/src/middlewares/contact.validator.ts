import { body } from "express-validator";

export const validateContact = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isString()
    .withMessage("El nombre debe ser un texto válido"),

  body("surname")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isString()
    .withMessage("El apellido debe ser un texto válido"),

  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ser un email válido"),

  body("phone")
    .notEmpty()
    .withMessage("El teléfono es obligatorio")
    .isString()
    .withMessage("El teléfono debe ser un texto válido"),

  body("message")
    .notEmpty()
    .withMessage("El mensaje es obligatorio")
    .isString()
    .withMessage("El mensaje debe ser un texto válido"),
];
