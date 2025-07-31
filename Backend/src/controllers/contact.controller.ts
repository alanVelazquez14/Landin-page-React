import { Request, Response } from "express";
import { Contact } from "../models/contact.model";

export const postContact = async (req: Request, res: Response) => {
  const { name, surname, email, phone, message } = req.body;

  if (!name || !surname || !email || !phone || !message) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const newContact = new Contact({ name, surname, email, phone, message });
    await newContact.save();

    res
      .status(200)
      .json({ message: "Mensaje recibido, gracias por contactarnos" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar mensaje", error });
  }
};
