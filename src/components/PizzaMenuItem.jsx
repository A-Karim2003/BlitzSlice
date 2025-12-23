import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import CartItemControls from "./CartItemControls";
import { addItem } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";

function PizzaMenuItem({ menu }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, imageUrl, soldOut, ingredients } = menu;
  const cart = useSelector((store) => store.cart);

  function handleAddToCart() {
    const item = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addItem(item));
  }

  return (
    <div
      className={`flex gap-6 px-4 py-4 border-b border-gray-200 ${
        soldOut ? "opacity-60 grayscale" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg"
      />

      <div className="flex-1">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-gray-700 italic text-md mb-3">
            {ingredients.join(", ")}
          </p>

          <div className="flex justify-between items-center">
            {soldOut ? (
              <p className="text-gray-500 font-medium uppercase text-sm">
                Sold Out
              </p>
            ) : (
              <p className="font-medium">{formatCurrency(unitPrice)}</p>
            )}

            {!menu.soldOut && (
              <Button
                className="text-sm px-5 py-2"
                disabled={soldOut}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            )}
            {/* <CartItemControls /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaMenuItem;
