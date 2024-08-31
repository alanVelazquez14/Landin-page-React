import { createSlice } from "@reduxjs/toolkit";
import { categorys } from "../../data/Categories";

const INITIAL_STATE = {
  categories: categorys,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => state,
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
