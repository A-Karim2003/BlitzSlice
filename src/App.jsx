import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./appLayout/AppLayout";
import { loader as menuLoader } from "./pages/menu/Menu";

/*===================Pages==================*/
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Menu from "./pages/menu/Menu";

import Order, {
  action as orderAction,
  loader as orderFormLoader,
} from "./pages/order/Order";

import OrderDetails, {
  loader as orderLoader,
} from "./pages/order/OrderDetails";
import RootError from "./components/RootError";
import requireName from "./requireName";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    errorElement: <RootError />,
    children: [
      { index: true, Component: Home }, // public route
      {
        loader: requireName,
        children: [
          // protected routes
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
              {
                index: true,
                Component: Order,
                action: orderAction,
                loader: orderFormLoader,
              },
              {
                path: ":orderId",
                Component: OrderDetails,
                loader: orderLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
