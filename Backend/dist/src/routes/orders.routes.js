"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const order_models_1 = require("../models/order.models");
const express_validator_1 = require("express-validator");
const order_validator_1 = require("../middlewares/order.validator");
const router = (0, express_1.Router)();
router.get("/", auth_1.authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await order_models_1.Order.find({ user: userId }).populate("items.product");
        res.status(200).json({ orders });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener las órdenes" });
    }
});
router.post("/", auth_1.authenticate, order_validator_1.validateOrder, async (req, res) => {
    console.log("BODY RECIBIDO EN BACKEND:", req.body);
    console.log("ERRORES DE VALIDACION:", (0, express_validator_1.validationResult)(req));
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const userId = req.user.id;
        const { items, total } = req.body;
        const newOrder = new order_models_1.Order({
            user: userId,
            items,
            total,
        });
        await newOrder.save();
        res.status(201).json({ message: "Orden creada", order: newOrder });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear orden" });
    }
});
exports.default = router;
