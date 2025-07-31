import { Router } from "express";
import {
  addToCart,
  updateCartItem,
  removeCartItem,
  checkoutCart,
  getCartWithTotal,
} from "../controllers/cart.controller";
import { validateAddToCart } from "../middlewares/cart.validator";
import { handleValidationErrors } from "../middlewares/validate";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.post(
  "/add",
  authenticate,
  validateAddToCart,
  handleValidationErrors,
  addToCart
);
router.get("/", authenticate, getCartWithTotal);
router.put("/update", authenticate, updateCartItem);
router.delete("/remove/:id", authenticate, removeCartItem);
router.post("/checkout", authenticate, checkoutCart);

export default router;
