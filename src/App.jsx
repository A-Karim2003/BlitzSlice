import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./appLayout/AppLayout";

/*===================Pages==================*/
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";
import Menu from "./pages/Menu/Menu";

const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "cart", Component: Cart },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
