import { redirect } from "react-router-dom";
import store from "./store";
import { setMessage } from "./features/user/userSlice";

export default function requireName() {
  const state = store.getState();
  const { user } = state.user;
  if (!user) {
    store.dispatch(setMessage("You must provide a name"));
    throw redirect("/");
  }

  return null;
}
