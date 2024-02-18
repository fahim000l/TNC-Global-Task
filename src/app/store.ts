import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
