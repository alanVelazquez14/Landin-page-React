import axios from "axios";

const axiosContact = axios.create({
  baseURL: "http://localhost:8080/contact",
});

export const postContact = async (data) => {
  return await axiosContact.post("/", data);
};
