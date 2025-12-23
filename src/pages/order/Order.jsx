import Button from "../../components/Button";
import OrderInput from "../../components/OrderInput";
import PriorityCheckbox from "../../components/PriorityCheckbox";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../Services/apiRestaurant";
import Spinner from "../../components/Spinner";
import validateOrder from "../../utils/formValidation";
import { useSelector } from "react-redux";
import { getCart } from "../../features/cart/cartSlice";

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
  const navigation = useNavigation();
  const error = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const { user } = useSelector((store) => store.user);
  return (
    <div className="py-8 px-6">
      <h2 className="text-3xl font-semibold mb-8">Ready to order? Let's go!</h2>
      //! Revisit this code
      <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
      <Form method="POST">
        <OrderInput
          name={"customer"}
          label={"First Name"}
          inputId={"customer"}
          type={"text"}
          error={error}
          defaultValue={user}
        />

        <OrderInput
          name="phoneNumber"
          label={"Phone number"}
          inputId={"phoneNumber"}
          type={"tel"}
          error={error}
        />

        <OrderInput
          name="address"
          label={"Address"}
          inputId={"address"}
          error={error}
        >
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
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 flex items-center gap-4">
            {isSubmitting ? (
              <>
                <Spinner />
                <span>Placing Order</span>
              </>
            ) : (
              "Order now from €12.00"
            )}
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
  const errors = validateOrder(data);

  if (Object.keys(errors).length) return errors;

  const newOrder = {
    customer: data.customer,
    phone: data.phoneNumber,
    address: data.address,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const createdOrder = await createOrder(newOrder);

  return redirect(`/order/${createdOrder.id}`);
}
