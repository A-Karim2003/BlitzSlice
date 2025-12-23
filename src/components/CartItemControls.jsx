import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

import { getCartItem } from "../features/cart/cartSlice";

import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

export default function CartItemControls({ id }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(getCartItem(id));

  function increment() {
    dispatch(increaseItemQuantity(id));
  }
  function decrement() {
    dispatch(decreaseItemQuantity(id));
  }

  function emptyCart() {
    dispatch(clearCart(id));
  }

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center">
        <Button
          className="w-9 h-9 flex items-center justify-center text-xl font-bold"
          onClick={decrement}
        >
          −
        </Button>
        <span className="cursor-pointer text-lg font-semibold min-w-8 text-center">
          {cartItem.quantity}
        </span>
        <Button
          className="cursor-pointer w-9 h-9 flex items-center justify-center text-xl font-bold"
          onClick={increment}
        >
          +
        </Button>
      </div>

      <Button
        className="cursor-pointer px-5 py-2 uppercase text-sm font-semibold"
        onClick={emptyCart}
      >
        Delete
      </Button>
    </div>
  );
}
