import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/types";

type InitialState = {
  products: Product[];
  wishProducts: Product[];
  isLoading: boolean;
};

const initialState: InitialState = {
  products: [],
  wishProducts: [],
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
    addToWishList: (state, action: PayloadAction<Product>) => {
      state.wishProducts.push(action.payload);
    },
    removeFromWishList: (state, action: PayloadAction<Product[]>) => {
      state.wishProducts = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
