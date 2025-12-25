import { useLoaderData, useRevalidator } from "react-router-dom";
import Button from "../../components/Button";
import OrderItem from "../../components/OrderItem";
import { getOrder, updateOrder } from "../../Services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

export default function OrderDetails() {
  const orderDetails = useLoaderData();
  const revalidator = useRevalidator();
  console.log(orderDetails);

  const {
    id,
    cart,
    status,
    estimatedDelivery,
    orderPrice,
    priority,
    priorityPrice,
  } = orderDetails;
  console.log();

  const formattedEstimatedDelivery = formatDate(estimatedDelivery);
  const remainngTime = calcMinutesLeft(estimatedDelivery);

  /*
  How revalidate works:
    1. revalidate() is called
    2. Router marks route as "loading"
    3. Loader runs again
    4. Loader returns new data
    5. useLoaderData() receives new data
    6. React re-renders the component 
  */
  async function updateOrderPriority() {
    const updatedOrder = {
      ...orderDetails,
      priority: true,
    };
    await updateOrder(id, updatedOrder);

    revalidator.revalidate();
  }

  // Static data
  return (
    <div className="py-8 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-stone-600 tracking-wider">
          Order #{id} status
        </h2>
        <div className="flex gap-3">
          {priority && (
            <button className="bg-red-600 text-white font-semibold px-6 py-2.5 rounded-full uppercase text-sm">
              Priority
            </button>
          )}
          <button className="bg-green-500 text-white font-semibold px-6 py-2.5 rounded-full uppercase text-sm">
            {status}
          </button>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-200 px-6 py-6 rounded-lg mb-8 flex items-center justify-between">
        <p className="text-lg font-semibold">
          Only {remainngTime} minutes left 😃
        </p>
        <p className="text-gray-600 text-sm">
          (Estimated delivery: {formattedEstimatedDelivery})
        </p>
      </div>

      {/* Order Items */}
      <div className="mb-8 space-y-8">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </div>

      {/* Price Summary */}
      <div className="bg-gray-200 px-6 py-6 rounded-lg mb-8 space-y-2">
        <p className="font-semibold">
          Pizza price:
          <span className="text-stone-700"> {formatCurrency(orderPrice)} </span>
        </p>
        {priority && (
          <p className="font-semibold">
            Priority price:{" "}
            <span className="text-stone-700">
              {formatCurrency(priorityPrice)}
            </span>
          </p>
        )}
        <p className="font-semibold">
          To pay on delivery:{" "}
          <span className="text-stone-800 font-black">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </p>
      </div>

      <div className="flex justify-end">
        <Button className="py-2 px-5" onClick={updateOrderPriority}>
          Make Priority
        </Button>
      </div>
    </div>
  );
}

//* loader used to fetch order details before component renders
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const orderId = params.orderId;
  const orderData = await getOrder(orderId);

  return orderData;
}
