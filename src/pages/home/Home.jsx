import { useDispatch, useSelector } from "react-redux";
import WelcomeScreen from "../../components/WelcomeScreen";
import { useEffect } from "react";
import { clearMessage } from "../../features/user/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user?.message) {
      const timer = setTimeout(() => dispatch(clearMessage()), 5000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, user?.message]);

  return (
    <section className="flex flex-col gap-8 items-center justify-center mt-12 p-5">
      <WelcomeScreen />

      {user?.message && (
        <strong className="text-red-400 text-lg">{user.message}</strong>
      )}
    </section>
  );
}
