import axios from "axios";

const API_URL = "http://localhost:8080/cart";

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const fetchCart = () => axios.get(API_URL, getAuthHeader());

export const addToCartAPI = (productId, quantity = 1) =>
  axios.post(`${API_URL}/add`, { productId, quantity }, getAuthHeader());

export const updateCartItemAPI = (productId, quantity) =>
  axios.put(`${API_URL}/update`, { productId, quantity }, getAuthHeader());

export const removeCartItemAPI = (product) =>
  axios.delete(`${API_URL}/remove/${product.id}`, getAuthHeader());

export const checkoutAPI = () =>
  axios.post(`${API_URL}/checkout`, null, getAuthHeader());
