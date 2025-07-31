"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await user_model_1.User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "El email ya está registrado" });
        const newUser = new user_model_1.User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    }
    catch (error) {
        res.status(500).json({ message: "Error en el registro", error });
    }
};
exports.register = register;
const login = async (req, res) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    try {
        const { email, password } = req.body;
        const user = await user_model_1.User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Usuario no encontrado" });
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(401).json({ message: "Contraseña incorrecta" });
        const token = jsonwebtoken_1.default.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
        res.json({
            token,
            user: { id: user._id, username: user.username, email: user.email },
        });
    }
    catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
};
exports.login = login;
