import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: 500,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: 0,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleHiddenCart } =
  cartSlice.actions;

export default cartSlice.reducer;
