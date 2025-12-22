import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/user/userSlice";
import NameCaptureForm from "./NameCaptureForm";
import Button from "./Button";

export default function WelcomeScreen() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  function submitName() {
    if (!name.trim()) {
      toast.warn("Enter name to proceed");
      return;
    }
    dispatch(createUser(name));
    navigate("/menu");
  }

  return (
    <div className="text-center max-w-2xl">
      <h2 className="text-4xl font-semibold text-gray-800 mb-2">
        The best pizza.
      </h2>
      <p className="text-4xl font-semibold text-yellow-500 mb-12">
        Straight out of the oven, straight to you.
      </p>

      {!user ? (
        <NameCaptureForm
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeydown={(e) => e.key === "Enter" && submitName()}
          submitName={submitName}
        />
      ) : (
        <Button
          className="px-6 py-2 uppercase"
          onClick={() => navigate("/menu")}
        >
          Continue ordering, {user}
        </Button>
      )}
    </div>
  );
}
