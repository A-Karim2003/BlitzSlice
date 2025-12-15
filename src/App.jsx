import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./appLayout/AppLayout";

/*===================Pages==================*/
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "cart", Component: Cart },
      { path: "order", Component: Order },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
