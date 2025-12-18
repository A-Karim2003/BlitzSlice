import { Bounce, ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import FullPageSpinner from "../components/FullPageSpinner";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(isLoading);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col max-w-4xl w-full m-auto my-18">
        {isLoading && <FullPageSpinner />}
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </main>
      <Footer />
    </div>
  );
}
