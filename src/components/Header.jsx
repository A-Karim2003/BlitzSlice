import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMenu = location.pathname === "/menu";

  return (
    <header className="bg-yellow-400 px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 h-15">
      <h1
        className="text-xl font-mono tracking-wide cursor-pointer"
        onClick={() => navigate("/")}
      >
        FAST REACT PIZZA CO.
      </h1>
      {isMenu && (
        <input
          type="text"
          placeholder="Search order #"
          className="px-4 py-2 rounded-full bg-yellow-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
        />
      )}
    </header>
  );
}
