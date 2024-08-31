import { createSlice } from "@reduxjs/toolkit";
import { pickRandom } from "./pickRandom.js";
import { burgers } from "../../data/Menu.js";

const INITIAL_STATE = {
  recommended: pickRandom(burgers, 5),
};

export const recommendedSlice = createSlice({
  name: "recommended",
  initialState: INITIAL_STATE,
  reducers: {
    randomRecommended: (state) => state,
  },
});

export const { randomRecommended } = recommendedSlice.actions;

export default recommendedSlice.reducer;
