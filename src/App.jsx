import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./appLayout/AppLayout";
import { loader as menuLoader } from "./pages/menu/Menu";

/*===================Pages==================*/
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Menu from "./pages/menu/Menu";
import Order, { action as orderAction } from "./pages/order/Order";

import OrderDetails, {
  loader as orderLoader,
} from "./pages/order/OrderDetails";
import RootError from "./components/RootError";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    errorElement: <RootError />,
    children: [
      { index: true, Component: Home },
      {
        path: "menu",
        Component: Menu,
        loader: menuLoader,
        errorElement: <RootError />,
      },
      { path: "cart", Component: Cart },
      {
        path: "order",
        children: [
          { index: true, Component: Order, action: orderAction },
          { path: ":orderId", Component: OrderDetails, loader: orderLoader },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
