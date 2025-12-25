import Button from "../../components/Button";
import OrderInput from "../../components/OrderInput";
import PriorityCheckbox from "../../components/PriorityCheckbox";
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../Services/apiRestaurant";
import Spinner from "../../components/Spinner";
import validateOrder from "../../utils/formValidation";
import { useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from "../../features/cart/cartSlice";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";

export default function OrderForm() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const error = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const { user } = useSelector((store) => store.user);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityFee = Math.floor(isChecked ? totalCartPrice * 0.2 : 0);
  console.log(priorityFee);

  return (
    <div className="py-8 px-6">
      <h2 className="text-3xl font-semibold mb-8">Ready to order? Let's go!</h2>
      <Form method="POST">
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
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

        <PriorityCheckbox
          name="priority"
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />

        <div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-4 py-2 flex items-center gap-4">
            {isSubmitting ? (
              <>
                <Spinner />
                <span>Placing Order</span>
              </>
            ) : (
              <span>
                Order now from {formatCurrency(totalCartPrice + priorityFee)}
              </span>
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}

/*
  When form is submitted, {request} parameter has access to the 
  form data which has name fields attached
 */

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
    test: "Testing",
  };

  const createdOrder = await createOrder(newOrder);

  //* When order is placed, clear cart
  store.dispatch(clearCart());

  return redirect(`/order/${createdOrder.id}`);
}

// eslint-disable-next-line react-refresh/only-export-components
export function loader() {
  const { cart } = store.getState().cart;
  if (!cart.length) throw redirect("/menu");
}
