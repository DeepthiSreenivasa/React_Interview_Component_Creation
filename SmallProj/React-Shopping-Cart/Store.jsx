import CartReducer from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default Store;
