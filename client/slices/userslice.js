import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = authSlice.actions;

export default authSlice.reducer;
