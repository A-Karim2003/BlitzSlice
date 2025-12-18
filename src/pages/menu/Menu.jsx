import PizzaMenuItem from "../../components/PizzaMenuItem";
import { getMenu } from "../../Services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

export default function Menu() {
  const menus = useLoaderData();
  console.log(menus);

  const pizzas = [
    {
      id: 1,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 2,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 3,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 4,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 5,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 6,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 7,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },

    {
      id: 8,
      name: "Pepperoni",
      ingredients: "Tomato, Mozzarella, Pepperoni",
      price: 14.0,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=400&fit=crop",
      soldOut: false,
    },
  ];

  return (
    <div>
      {pizzas.map((menus) => (
        <PizzaMenuItem key={menus.id} menu={menus} />
      ))}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}
