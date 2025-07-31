import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error al traer productos:", error);
    return [];
  }
};
