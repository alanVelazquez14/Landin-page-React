import {
  fetchCart,
  addToCartAPI,
  updateCartItemAPI,
  removeCartItemAPI,
  checkoutAPI,
} from "../../axios/axios-cart";

import { setCartItems, clearCart } from "./cartSlice";

export const loadCartFromBackend = () => async (dispatch) => {
  try {
    const { data } = await fetchCart();
    dispatch(setCartItems(data.cartItems));
  } catch (error) {
    console.error("Error al cargar carrito:", error);
  }
};

export const addItemToBackendCart =
  (productId, quantity = 1) =>
  async (dispatch) => {
    try {
      await addToCartAPI(productId, quantity);
      dispatch(loadCartFromBackend());
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

export const updateBackendCartItem =
  (productId, quantity) => async (dispatch) => {
    try {
      await updateCartItemAPI(productId, quantity);
      dispatch(loadCartFromBackend());
    } catch (error) {
      console.error("Error al actualizar cantidad:", error);
    }
  };

export const removeBackendCartItem = (product) => async (dispatch) => {
  try {
    await removeCartItemAPI(product);
    dispatch(loadCartFromBackend());
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

export const checkoutCart = () => async (dispatch) => {
  try {
    await checkoutAPI();
    dispatch(clearCart());
  } catch (error) {
    console.error("Error en checkout:", error);
  }
};
