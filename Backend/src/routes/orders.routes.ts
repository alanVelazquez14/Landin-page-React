import { Router, Response } from "express";
import { authenticate, AuthRequest } from "../middlewares/auth";
import { Order } from "../models/order.models";
import { validationResult } from "express-validator";
import { validateOrder } from "../middlewares/order.validator";

const router = Router();

router.get("/", authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const orders = await Order.find({ user: userId }).populate("items.product");
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las órdenes" });
  }
});

router.post(
  "/",
  authenticate,
  validateOrder,
  async (req: AuthRequest, res: Response) => {
    console.log("BODY RECIBIDO EN BACKEND:", req.body);
    console.log("ERRORES DE VALIDACION:", validationResult(req));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userId = req.user!.id;
      const { items, total } = req.body;

      const newOrder = new Order({
        user: userId,
        items,
        total,
      });

      await newOrder.save();
      res.status(201).json({ message: "Orden creada", order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear orden" });
    }
  }
);

export default router;
