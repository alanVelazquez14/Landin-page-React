import axios from "axios";
import {
  createOrderFail,
  fetchOrdersFail,
  fetchOrdersStar,
  fetchOrdersSuccess,
} from "../redux/ordersSlice/ordersSlice";
const BASE_URL = "https://nucbaz-api.vercel.app/";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStar());

  try {
    const orders = await axios.get(`${BASE_URL}orders`, {
      headers: {
        "x-token": currentUser.token,
      },
    });

    if (orders) {
      dispatch(fetchOrdersSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchOrdersFail("No se pudieron obtener las órdenes"));
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}orders`, order, {
      headers: {
        "x-token": currentUser.token,
      },
    });

    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    dispatch(createOrderFail());
  }
};
