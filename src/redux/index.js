import { configureStore } from "@reduxjs/toolkit";
import ProductData from "./product";
export const store = configureStore({
  reducer: {
    prouductData: ProductData,
  },
});
