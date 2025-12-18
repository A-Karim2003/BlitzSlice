import Button from "../../components/Button";
import OrderItem from "../../components/OrderItem";

export default function OrderDetails() {
  // Static data
  const orderNumber = "091RBJ";
  const status = "PREPARING ORDER";
  const minutesLeft = 35;
  const estimatedDelivery = "Dec 16, 08:52 PM";

  const orderItems = [
    {
      id: 1,
      quantity: 1,
      name: "Diavola",
      ingredients: "Tomato, Mozzarella, Spicy Salami, Chili Flakes",
      price: 16.0,
    },
    {
      id: 2,
      quantity: 3,
      name: "Vegetale",
      ingredients: "Tomato, Mozzarella, Bell Peppers, Onions, Mushrooms",
      price: 39.0,
    },
  ];

  const pizzaPrice = 55.0;
  const totalPrice = 55.0;

  return (
    <div className="py-8 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold">Order #{orderNumber} status</h2>
        <span className="bg-green-500 text-white font-semibold px-6 py-2.5 rounded-full uppercase text-sm">
          {status}
        </span>
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-200 px-6 py-6 rounded-lg mb-8 flex items-center justify-between">
        <p className="text-lg font-semibold">
          Only {minutesLeft} minutes left 😃
        </p>
        <p className="text-gray-600 text-sm">
          (Estimated delivery: {estimatedDelivery})
        </p>
      </div>

      {/* Order Items */}
      <div className="mb-8 space-y-8">
        {orderItems.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      {/* Price Summary */}
      <div className="bg-gray-200 px-6 py-6 rounded-lg mb-8 space-y-2">
        <p className="text-lg">
          Price pizza:
          <span className="font-semibold"> €{pizzaPrice.toFixed(2)} </span>
        </p>
        <p className="text-lg font-semibold">
          To pay on delivery: <span>€{totalPrice.toFixed(2)}</span>
        </p>
      </div>

      {/* Action Button */}
      <div className="flex justify-end border">
        <Button className="py-2 px-5">Make Priority</Button>
      </div>
    </div>
  );
}
