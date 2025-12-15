import { Bounce, ToastContainer } from "react-toastify";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col max-w-4xl w-full m-auto my-18">
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

      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 h-15">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="font-semibold uppercase text-sm tracking-wide">
            1 PIZZA €14.00
          </span>
          <button className="font-semibold px-6 py-2 rounded-full uppercase text-sm transition-colors flex items-center gap-2">
            Open Cart →
          </button>
        </div>
      </footer>
    </div>
  );
}
