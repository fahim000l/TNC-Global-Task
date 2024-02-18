import { createSlice } from "@reduxjs/toolkit";

export interface cartState {
  cart: any[];
}

const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: ({ cart }, { payload }) => {
      let product = payload;
      product.count = 1;
      if (payload?.idMeal) {
        payload.productId = payload.idMeal;
      }
      if (payload?.idDrink) {
        payload.productId = payload.idDrink;
      }
      cart.push(product);
    },
    removeFromCart: ({ cart }, { payload }) => {
      const otherItems = cart?.filter((item) => item?.productId !== payload);
      cart = otherItems;
      console.log(otherItems);
      console.log(payload);
    },
    increment: ({ cart }, { payload }) => {
      let requiredItem = cart?.find((item) => item?.productId === payload);
      requiredItem.count += 1;
      cart = cart?.filter((item) => item?.productId !== payload);
      cart?.push(requiredItem);
    },
    decrement: ({ cart }, { payload }) => {
      let requiredItem = cart?.find((item) => item?.productId === payload);
      if (requiredItem?.count > 1) {
        requiredItem.count -= 1;
        cart = cart?.filter((item) => item?.productId !== payload);
        cart?.push(requiredItem);
      } else {
        cart = cart?.filter((item) => item?.productId !== payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
