import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang") || "uz",
};
const LangugageSlice = createSlice({
  name: "languge",
  initialState,
  reducers: {
    editLangugage: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { editLangugage } = LangugageSlice.actions;
export default LangugageSlice.reducer;
