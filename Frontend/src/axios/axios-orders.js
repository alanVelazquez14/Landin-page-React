import axios from "axios";
import {
  createOrderFail,
  fetchOrdersFail,
  fetchOrdersStar,
  fetchOrdersSuccess,
} from "../redux/ordersSlice/ordersSlice";
const BASE_URL = "http://localhost:8080/";

export const getOrders = async (dispatch, currentUser) => {
  dispatch(fetchOrdersStar());

  try {
    const response = await axios.get("http://localhost:8080/orders", {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });

    dispatch(fetchOrdersSuccess(response.data.orders));
  } catch (error) {
    dispatch(fetchOrdersFail("No se pudieron obtener las órdenes"));
  }
};

export const createOrder = async (order, dispatch, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}orders`, order, {
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
    });

    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
    dispatch(createOrderFail());
  }
};
