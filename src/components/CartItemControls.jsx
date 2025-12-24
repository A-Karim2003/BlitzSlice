import { useDispatch } from "react-redux";
import Button from "./Button";

import {
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

export default function CartItemControls({ cartItem }) {
  const dispatch = useDispatch();

  function increment() {
    dispatch(increaseItemQuantity(cartItem.pizzaId));
  }
  function decrement() {
    dispatch(decreaseItemQuantity(cartItem.pizzaId));
  }

  function emptyCart() {
    dispatch(clearCart(cartItem.pizzaId));
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
