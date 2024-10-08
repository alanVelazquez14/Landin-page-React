import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/cartSlice/cartSlice";

export const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => {
      return (acc += item.quantity);
    },
    0
  );
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(toggleHiddenCart())}>
      <FaShoppingCart />
      <span>{totalCartItems}</span>
    </div>
  );
};
