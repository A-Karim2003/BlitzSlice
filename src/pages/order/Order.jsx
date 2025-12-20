import Button from "../../components/Button";
import OrderInput from "../../components/OrderInput";
import PriorityCheckbox from "../../components/PriorityCheckbox";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../Services/apiRestaurant";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function OrderForm() {
  const cart = fakeCart;
  return (
    <div className="py-8 px-6">
      <h2 className="text-3xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <OrderInput
          name={"firstName"}
          label={"First Name"}
          inputId={"firstName"}
          type={"text"}
        />

        <OrderInput
          name="phoneNumber"
          label={"Phone number"}
          inputId={"phoneNumber"}
          type={"tel"}
        />

        <OrderInput name="address" label={"Address"} inputId={"address"}>
          <Button
            className={
              "absolute right-1 top-[50%] translate-y-[-50%] px-4 py-2 text-xs h-[80%] font-black"
            }
            type="button"
          >
            GET POSITION
          </Button>
        </OrderInput>

        <PriorityCheckbox name="priority" />

        <div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800  px-4 py-2">
            Order now from €12.00
          </Button>
        </div>
      </Form>
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newOrder = {
    customer: data.firstName,
    phone: data.phoneNumber,
    address: data.address,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const createdOrder = await createOrder(newOrder);

  console.log("Sending to API:", createdOrder);

  return redirect(`/order/${createdOrder.id}`);
}
