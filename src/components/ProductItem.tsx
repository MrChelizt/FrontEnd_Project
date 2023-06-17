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

import { Product } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { productActions } from "../redux/slices/products";
import { Link } from "react-router-dom";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  const wishListProducts = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const dispatch = useDispatch();

  const addToWishList = (item: Product) => {
    const wishedItem = wishListProducts.some(
      (wishItem) => wishItem.title === item.title
    );

    const removeWishedProduct = wishListProducts.filter(
      (removeWishItem) => removeWishItem.title !== item.title
    );
    dispatch(productActions.removeFromWishList(removeWishedProduct));

    if (!wishedItem) {
      dispatch(productActions.addToWishList(item));
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
          <IconButton
            aria-label="add to favorites"
            onClick={() => addToWishList(item)}
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
