import { Response } from "express";
import { Cart } from "../models/cart.model";
import { Order } from "../models/order.models";
import { AuthRequest } from "../middlewares/auth";

const getCart = async (userId: string) => {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
    await cart.save();
  }
  return cart;
};

export const addToCart = async (req: AuthRequest, res: Response) => {
  const { productId, quantity } = req.body;
  const userId = req.user?.id;

  if (!productId || !quantity || quantity <= 0) {
    return res.status(400).json({ message: "Producto y cantidad inválidos" });
  }

  try {
    const cart = await getCart(userId!);
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar al carrito", error });
  }
};

export const updateCartItem = async (req: AuthRequest, res: Response) => {
  const { productId, quantity } = req.body;
  const userId = req.user?.id;

  try {
    const cart = await getCart(userId!);
    const item = cart.items.find(
      (item) => item.product.toString() === productId
    );
    if (!item)
      return res
        .status(404)
        .json({ message: "Producto no encontrado en el carrito" });

    item.quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el carrito", error });
  }
};

export const removeCartItem = async (req: AuthRequest, res: Response) => {
  const productId = req.params.id;
  const userId = req.user?.id;

  try {
    const cart = await getCart(userId!);
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    ) as any;
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar ítem", error });
  }
};

export const checkoutCart = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "El carrito está vacío" });
    }

    const order = new Order({ user: userId, items: cart.items });
    await order.save();

    cart.items.splice(0);
    await cart.save();

    res.json({ message: "Compra realizada con éxito", orderId: order._id });
  } catch (error) {
    res.status(500).json({ message: "Error en el checkout", error });
  }
};

export const getCartWithTotal = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    if (!cart)
      return res.status(404).json({ message: "Carrito no encontrado" });

    const total = cart.items.reduce((acc, item) => {
      const product: any = item.product;
      return acc + product.price * item.quantity;
    }, 0);

    res.json({ cart, total });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el carrito", error });
  }
};
