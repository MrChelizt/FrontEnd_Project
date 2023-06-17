import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { Button } from "@mui/material";
import { cartActions } from "../redux/slices/cart";

export default function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const navigateBack = () => navigate(-1);

  const products = useSelector((state: RootState) => state.products.products);

  const dispatch = useDispatch();

  const productDetails = products.find(
    (item) => item.id === parseInt(id || "-1")
  );

  return (
    <div style={{ display: "flex", margin: 20 }}>
      <img src={productDetails?.images[0]} />
      <div
        style={{
          margin: 20,
        }}
      >
        <p>{productDetails?.title}</p>
        <p>€ {productDetails?.price}</p>
        <p>{productDetails?.description}</p>
        <div>
          <Button
            variant="text"
            onClick={() => dispatch(cartActions.addToCart(productDetails))}
          >
            Add To Cart
          </Button>
          <Button variant="text" onClick={navigateBack}>
            Back
          </Button>
        </div>
        <p>
          Members receive free standard shipping and free returns on purchases
          of at least €25
        </p>
      </div>
    </div>
  );
}
