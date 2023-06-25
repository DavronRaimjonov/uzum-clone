import { configureStore } from "@reduxjs/toolkit";
import langugageSlice from "./langugage-slice";
import modalSlice from "./modal-slice";
import cityClice from "./city";
export const store = configureStore({
  reducer: {
    language: langugageSlice,
    modal: modalSlice,
    city: cityClice,
  },
});
