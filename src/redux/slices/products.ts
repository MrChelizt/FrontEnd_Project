import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  products: Product[];
  value: Product[];
  isLoading: boolean;
};

const initialState: InitialState = {
  products: [],
  value: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    addToWishList: (state, actions: PayloadAction<Product>) => {
      state.value = [...state.value, actions.payload];
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
