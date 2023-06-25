import { createSlice } from "@reduxjs/toolkit";

const CitySclice = createSlice({
  initialState: {
    city: localStorage.getItem("city") || "Tashkent",
  },
  name: "city",
  reducers: {
    editCity: (state, { payload }) => {
      state.city = payload;
    },
  },
});
export const { editCity } = CitySclice.actions;
export default CitySclice.reducer;
