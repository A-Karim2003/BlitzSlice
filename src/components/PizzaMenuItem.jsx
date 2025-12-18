import Button from "./Button";
import CartItemControls from "./CartItemControls";

function PizzaMenuItem({ menu }) {
  const { name, unitPrice, imageUrl, soldOut, ingredients } = menu;

  console.log(name, unitPrice, imageUrl, soldOut, ingredients);

  console.log(menu.unitPrice);

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
          <p className="text-gray-500 italic text-sm mb-3">{ingredients}</p>

          <div className="flex justify-between items-center">
            {soldOut ? (
              <p className="text-gray-500 font-medium uppercase text-sm">
                Sold Out
              </p>
            ) : (
              <p className="font-medium">€{Number(unitPrice).toFixed(2)}</p>
            )}

            <Button className="text-sm px-5 py-2">Add to Cart</Button>
            {/* <CartItemControls /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaMenuItem;
