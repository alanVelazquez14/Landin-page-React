"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String },
    categoria: { type: String },
    img: { type: String },
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
