import { Badge, Drawer, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const wishList = useSelector(
    (state: RootState) => state.products.wishProducts
  );

  const mappedWishList = wishList?.map((item) => (
    <ListItem key={item.id}>
      <img
        src={item.images[0]}
        alt={item.title}
        style={{ height: 50, width: 50, borderRadius: 50, objectFit: "cover" }}
      />
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

  return (
    <div className="navbar_container">
      <ul className="nav_list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/products">
            Products
          </Link>
        </li>
        <li className="link" style={{ cursor: "pointer" }}>
          <Badge badgeContent={mappedWishList.length} showZero color="primary">
            {handleWishList}
          </Badge>
        </li>
        <li>
          <Link className="link" to="/cart">
            <Badge
              badgeContent={mappedWishList.length}
              showZero
              color="primary"
            >
              Cart
            </Badge>
          </Link>
        </li>
        <li>
          <Link className="link" to="/brand">
            Brand
          </Link>
        </li>
        <li>
          <Link className="link" to="/sustainability">
            Sustainability
          </Link>
        </li>
        <li>
          <Link className="link" to="/about_us">
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
