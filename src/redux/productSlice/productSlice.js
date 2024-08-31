import { createSlice } from "@reduxjs/toolkit";
import { burgers, TotalProductos } from "../../data/Menu";

const INITIAL_STATE = {
  products: burgers,
  TotalProductos: TotalProductos,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
