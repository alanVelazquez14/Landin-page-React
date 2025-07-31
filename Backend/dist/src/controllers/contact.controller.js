"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContact = void 0;
const contact_model_1 = require("../models/contact.model");
const postContact = async (req, res) => {
    const { name, surname, email, phone, message } = req.body;
    if (!name || !surname || !email || !phone || !message) {
        return res
            .status(400)
            .json({ message: "Todos los campos son obligatorios" });
    }
    try {
        const newContact = new contact_model_1.Contact({ name, surname, email, phone, message });
        await newContact.save();
        res
            .status(200)
            .json({ message: "Mensaje recibido, gracias por contactarnos" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al guardar mensaje", error });
    }
};
exports.postContact = postContact;
