import { redirect } from "react-router-dom";
import store from "./store";

export default function requireName() {
  const state = store.getState();
  const { user } = state.user;
  if (!user) throw redirect("/");

  return null;
}
