import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../../features/cart/cartSlice";
import CartItem from "../../components/CartItem";
import ClearCartBtn from "../../components/ClearCartBtn";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const cart = useSelector(getCart);

  return (
    <div className="py-8 px-6">
      <button
        onClick={() => navigate("/menu")}
        className="text-blue-500 hover:text-blue-600 hover:underline text-sm mb-8 cursor-pointer"
      >
        ← Back to menu
      </button>

      {cart.length >= 1 ? (
        <>
          <h2 className="text-3xl font-semibold mb-8">Your cart, {user}</h2>

          {cart.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}

          <div className="flex gap-4 ">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4"
              onClick={() => navigate("/order")}
            >
              Order Pizzas
            </Button>

            <ClearCartBtn onClick={() => dispatch(clearCart())} />
          </div>
        </>
      ) : (
        <p className="text-lg text-stone-600 tracking-[1.5px] font-extrabold">
          Your cart is empty. Start addind pizza from the menu
        </p>
      )}
    </div>
  );
}
