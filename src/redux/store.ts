import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import cartReducer from "./slices/cart";
import searchReducer from "./slices/search";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
