import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItem(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
