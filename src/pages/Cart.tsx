import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import CartItem from "../components/CartItem";
import { RootState } from "../redux/store";
import { cartActions } from "../redux/slices/cart";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const mappedCartItems = cartItems.map((item, index) => (
    <CartItem key={item.product.id} index={index} item={item} />
  ));

  const handleToastSuccess = () => {
    toast.success(`Check out successfull with the amount: € ${totalAmount}`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <h1>Your Cart List</h1>
      {mappedCartItems}
      <h3>Total: € {totalAmount}</h3>
      <Box display="flex">
        <Button variant="text" onClick={() => handleToastSuccess()}>
          Check Out
        </Button>
        <ToastContainer />
        <Button variant="text" onClick={() => dispatch(cartActions.cancel())}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
