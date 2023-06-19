import axios from "axios";

import { productActions } from "../slices/products";
import { AppDispatch } from "../store";

const productUrl = "https://api.escuelajs.co/api/v1/products/";

export default function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    axios.get(productUrl).then(({ data }) => {
      dispatch(productActions.getProductData(data));
    });
  };
}
