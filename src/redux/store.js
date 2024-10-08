import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducers from "./categoriesSlice/categoriesSlice";
import productReducers from "./productSlice/productSlice";
import recommendedReducer from "./recomendadosSlice/recomendadosSlice";
import cartReducer from "./cartSlice/cartSlice";
import userReducer from "./userSlice/userSlice";
import ordersReducer from "./ordersSlice/ordersSlice";

const reducers = combineReducers({
  categories: categoriesReducers,
  products: productReducers,
  recommended: recommendedReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
