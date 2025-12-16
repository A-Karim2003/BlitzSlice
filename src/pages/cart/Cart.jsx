import { useNavigate } from "react-router-dom";
import CartItemControls from "../../components/CartItemControls";
import Button from "../../components/Button";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className="py-8 px-6">
      <button
        onClick={() => navigate("/menu")}
        className="text-blue-500 hover:text-blue-600 hover:underline text-sm mb-8 cursor-pointer"
      >
        ← Back to menu
      </button>

      <h2 className="text-3xl font-semibold mb-8">Your cart,</h2>

      <div className="mb-8 ">
        <div className="flex items-center justify-between py-4 border-b border-gray-200">
          <span className="text-lg">1× Margherita</span>
          <div className="flex items-center gap-6 ">
            <span className="font-semibold">€12.00</span>
            <CartItemControls />
          </div>
        </div>
      </div>

      <div className="flex gap-4 ">
        <Button
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-4"
          onClick={() => navigate("/order/new")}
        >
          Order Pizzas
        </Button>

        <button className="text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5 cursor-pointer">
          Clear Cart
        </button>
      </div>
    </div>
  );
}
