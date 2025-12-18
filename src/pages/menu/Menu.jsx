import PizzaMenuItem from "../../components/PizzaMenuItem";
import { getMenu } from "../../Services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

export default function Menu() {
  const menus = useLoaderData();

  return (
    <div>
      {menus.map((menu) => (
        <PizzaMenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}
