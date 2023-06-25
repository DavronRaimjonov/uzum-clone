import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  locationModalVisibility: false,
};
const ModalSlice = createSlice({
  name: "produc-data",
  initialState,
  reducers: {
    editLocationModalVisibility: (state) => {
      state.locationModalVisibility = !state.locationModalVisibility;
    },
  },
});
export const { editLocationModalVisibility } = ModalSlice.actions;

export default ModalSlice.reducer;
