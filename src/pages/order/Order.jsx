import { useState } from "react";
import Button from "../../components/Button";
import OrderInput from "../../components/OrderInput";
import PriorityCheckbox from "../../components/PriorityCheckbox";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [priority, setPriority] = useState(false);

  const fields = [firstName, phoneNumber, address];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fields.some((field) => field.trim() === "")) {
      toast.warn("Fill all inputs");
      return;
    }

    navigate("/order/123");
  };

  const handleGetPosition = () => {
    // Handle geolocation
  };

  console.log(address);

  return (
    <div className="py-8 px-6">
      <h2 className="text-3xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <form onSubmit={handleSubmit}>
        <OrderInput
          label={"First Name"}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          inputId={"firstName"}
          type={"text"}
        />

        <OrderInput
          label={"Phone number"}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          inputId={"phoneNumber"}
          type={"tel"}
        />

        <OrderInput
          label={"Address"}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          inputId={"address"}
        >
          <Button
            className={
              "absolute right-1 top-[50%] translate-y-[-50%] px-4 py-2 text-xs h-[80%] font-black"
            }
            type="button"
            onClick={handleGetPosition}
          >
            GET POSITION
          </Button>
        </OrderInput>

        <PriorityCheckbox
          checked={priority}
          onChange={(e) => setPriority(e.target.checked)}
        />

        <div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800  px-4 py-2">
            Order now from €12.00
          </Button>
        </div>
      </form>
    </div>
  );
}
