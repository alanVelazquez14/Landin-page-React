"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: "Token requerido" });
    const token = authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "Token no proporcionado" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    }
    catch (error) {
        console.error("Error validando token:", error);
        return res.status(401).json({ message: "Token inválido" });
    }
};
exports.authenticate = authenticate;
