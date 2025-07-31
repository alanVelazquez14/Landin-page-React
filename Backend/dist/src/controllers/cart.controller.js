"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCartWithTotal = exports.checkoutCart = exports.removeCartItem = exports.updateCartItem = exports.addToCart = void 0;
const cart_model_1 = require("../models/cart.model");
const order_models_1 = require("../models/order.models");
const getCart = async (userId) => {
    let cart = await cart_model_1.Cart.findOne({ user: userId });
    if (!cart) {
        cart = new cart_model_1.Cart({ user: userId, items: [] });
        await cart.save();
    }
    return cart;
};
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user?.id;
    if (!productId || !quantity || quantity <= 0) {
        return res.status(400).json({ message: "Producto y cantidad inválidos" });
    }
    try {
        const cart = await getCart(userId);
        const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        }
        else {
            cart.items.push({ product: productId, quantity });
        }
        await cart.save();
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ message: "Error al agregar al carrito", error });
    }
};
exports.addToCart = addToCart;
const updateCartItem = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user?.id;
    try {
        const cart = await getCart(userId);
        const item = cart.items.find((item) => item.product.toString() === productId);
        if (!item)
            return res
                .status(404)
                .json({ message: "Producto no encontrado en el carrito" });
        item.quantity = quantity;
        await cart.save();
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el carrito", error });
    }
};
exports.updateCartItem = updateCartItem;
const removeCartItem = async (req, res) => {
    const productId = req.params.id;
    const userId = req.user?.id;
    try {
        const cart = await getCart(userId);
        cart.items = cart.items.filter((item) => item.product.toString() !== productId);
        await cart.save();
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar ítem", error });
    }
};
exports.removeCartItem = removeCartItem;
const checkoutCart = async (req, res) => {
    const userId = req.user?.id;
    try {
        const cart = await cart_model_1.Cart.findOne({ user: userId });
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "El carrito está vacío" });
        }
        const order = new order_models_1.Order({ user: userId, items: cart.items });
        await order.save();
        cart.items.splice(0);
        await cart.save();
        res.json({ message: "Compra realizada con éxito", orderId: order._id });
    }
    catch (error) {
        res.status(500).json({ message: "Error en el checkout", error });
    }
};
exports.checkoutCart = checkoutCart;
const getCartWithTotal = async (req, res) => {
    const userId = req.user?.id;
    try {
        const cart = await cart_model_1.Cart.findOne({ user: userId }).populate("items.product");
        if (!cart)
            return res.status(404).json({ message: "Carrito no encontrado" });
        const total = cart.items.reduce((acc, item) => {
            const product = item.product;
            return acc + product.price * item.quantity;
        }, 0);
        res.json({ cart, total });
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener el carrito", error });
    }
};
exports.getCartWithTotal = getCartWithTotal;
