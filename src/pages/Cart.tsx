import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartItem from "../components/CartItem";
import { cartActions } from "../redux/slices/cart";
import { Button } from "@mui/material";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const mappedCartItems = cartItems.map((item, index) => (
    <CartItem key={item.product.id} index={index} item={item} />
  ));

  return (
    <div>
      <h1>Your Cart List</h1>
      {mappedCartItems}
      <h3>Total: € {totalAmount}</h3>
      <Button variant="text">Check Out</Button>
      <Button variant="text" onClick={() => dispatch(cartActions.cancel())}>
        Cancel
      </Button>
    </div>
  );
}
