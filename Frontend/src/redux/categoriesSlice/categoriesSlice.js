import { createSlice } from "@reduxjs/toolkit";
import { categorys } from "../../data/Categories";

const INITIAL_STATE = {
  categories: categorys,
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    selectCategory: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
    getCategories: (state) => state,
  },
});

export const { getCategories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
