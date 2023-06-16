import { useState } from "react";
import { Drawer, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function WishList() {
  const [open, setOpen] = useState(false);

  const wishList = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const mappedWishList = wishList?.map((item) => (
    <ListItem key={item.id}>
      <img src={item.images[0]} alt={item.title} />
      <ListItemText>{item.title}</ListItemText>
    </ListItem>
  ));

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      <h3>Wish List</h3>
      {mappedWishList}
    </div>
  );

  const handleWishList = (
    <div>
      <div onClick={() => setOpen(true)}>Wish List</div>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  );

  return { handleWishList };
}
