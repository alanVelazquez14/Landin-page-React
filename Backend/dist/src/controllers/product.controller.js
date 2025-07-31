"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const product_model_1 = require("../models/product.model");
const getAllProducts = async (_req, res) => {
    try {
        const products = await product_model_1.Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const product = await product_model_1.Product.findById(req.params.id);
        if (!product)
            return res.status(404).json({ message: "Producto no encontrado" });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
};
exports.getProductById = getProductById;
