import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Box, Button } from "@mui/material";

import { cartActions } from "../redux/slices/cart";
import { RootState } from "../redux/store";

export default function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  const products = useSelector((state: RootState) => state.products.products);

  const dispatch = useDispatch();

  const productDetails = products.find(
    (item) => item.id === parseInt(id || "-1")
  );

  const handleAddToCartToast = () => {
    toast.success(`${productDetails?.title} has been added to the cart`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <Box display="flex" m={2}>
      <img src={productDetails?.images[0]} alt={productDetails?.title} />
      <div
        style={{
          margin: 20,
        }}
      >
        <p>{productDetails?.title}</p>
        <p>€ {productDetails?.price}</p>
        <p>{productDetails?.description}</p>
        <Box display="flex" justifyContent="center">
          <Button
            variant="text"
            onClick={() => {
              dispatch(cartActions.addToCart(productDetails));
              handleAddToCartToast();
            }}
          >
            Add To Cart
          </Button>
          <Button variant="text" onClick={navigateBack}>
            Back
          </Button>
        </Box>
        <p>
          Members receive free standard shipping and free returns on purchases
          of at least €25
        </p>
      </div>
    </Box>
  );
}
