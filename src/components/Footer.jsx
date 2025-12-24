import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantity, getTotalCartPrice } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";

export default function Footer() {
  const cartQuantity = useSelector(getCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cartQuantity) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 h-15">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <span className="uppercase text-md font-black tracking-wide">
          {cartQuantity} PIZZA {formatCurrency(totalCartPrice)}
        </span>
        <Link
          className="font-black px-6 py-2 rounded-full uppercase transition-colors flex items-center gap-2 cursor-pointer text-md"
          to="/cart"
        >
          Open Cart →
        </Link>
      </div>
    </footer>
  );
}
