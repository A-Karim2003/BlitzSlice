import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./appLayout/AppLayout";
import { loader as menuLoader } from "./pages/menu/Menu";

/*===================Pages==================*/
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";
import OrderDetails from "./pages/order/OrderDetails";
import RootError from "./components/RootError";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    errorElement: <RootError />,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu, loader: menuLoader },
      { path: "cart", Component: Cart },
      {
        path: "order",
        children: [
          { path: "new", Component: Order },
          { path: ":orderId", Component: OrderDetails },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
