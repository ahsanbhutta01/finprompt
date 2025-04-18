import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { apiSlice } from "./api";

export const store = configureStore({
   reducer: {
      auth: authSlice,
      [apiSlice.reducerPath]: apiSlice.reducer
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
})