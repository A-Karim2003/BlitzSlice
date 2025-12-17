import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isMenu = location.pathname === "/menu";

  return (
    <header className="bg-yellow-400 px-6 py-4  fixed top-0 left-0 right-0 h-15">
      <div className="flex justify-between items-center max-w-4xl m-auto">
        <Link
          className="text-xl font-mono tracking-wide cursor-pointer"
          to={"/"}
        >
          FAST REACT PIZZA CO.
        </Link>
        {isMenu && (
          <input
            type="text"
            placeholder="Search order #"
            className="px-4 py-2 rounded-full bg-yellow-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
          />
        )}
      </div>
    </header>
  );
}
