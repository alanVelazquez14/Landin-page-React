import axios from "axios";
const BASE_URL = "http://localhost:8080/";

export const createUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/register`, {
      username: nombre,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.errors[0].msg);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
