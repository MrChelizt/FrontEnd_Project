import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Product } from "../types/types";
import { RootState } from "../redux/store";
import { productActions } from "../redux/slices/products";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const wishListProducts = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const dispatch = useDispatch();

  const handleAddToWishListToast = (item: Product) => {
    toast.success(`${item.title} has been added to wish list.`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleRemoveFromWishListToast = (item: Product) => {
    toast.error(`${item.title} has been removed from wish list.`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const addToWishList = (item: Product) => {
    const wishedItem = wishListProducts.some(
      (wishItem) => wishItem.title === item.title
    );

    const removeWishedProduct = wishListProducts.filter(
      (removeWishItem) => removeWishItem.title !== item.title
    );

    if (!wishedItem) {
      dispatch(productActions.addToWishList(item));
      handleAddToWishListToast(item);
    } else {
      dispatch(productActions.removeFromWishList(removeWishedProduct));
      handleRemoveFromWishListToast(item);
    }
  };

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/products/${item.id}`}>
          <CardMedia
            component="img"
            height="250"
            image={item.images[0]}
            alt={item.description}
          />
        </Link>
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {item.title}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography>€ {item.price}</Typography>
          <ToastContainer />
          <IconButton
            aria-label="add to wish list"
            onClick={() => {
              addToWishList(item);
            }}
          >
            <FavoriteIcon
              sx={{
                color: wishListProducts.some(
                  (value) => value.title === item.title
                )
                  ? "red"
                  : "aquamarine",
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
