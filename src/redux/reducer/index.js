import profileReducer from "../slices/profileSlice";
import authReducer from "../slices/authSclice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
