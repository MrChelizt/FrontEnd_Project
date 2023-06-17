import axios from "axios";
import { productActions } from "../slices/products";
import { AppDispatch } from "../store";

const productUrl = "https://dummyjson.com/products/";

export default function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    axios.get(productUrl).then(({ data }) => {
      dispatch(productActions.getProductData(data.products));
    });
  };
}
