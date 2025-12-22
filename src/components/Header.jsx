import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [searchquery, setSearchQuery] = useState("");

  const { user } = useSelector((store) => store.user);

  function submitOrder(e) {
    e.preventDefault();
    if (!searchquery) return;
    navigate(`/order/${searchquery}`);

    setSearchQuery("");
  }
  return (
    <header className="bg-yellow-400 px-6 py-4 fixed top-0 left-0 right-0 h-15 z-50">
      <div className="flex justify-between items-center max-w-4xl m-auto">
        <Link
          className="text-xl font-mono tracking-wide cursor-pointer"
          to={"/"}
        >
          FAST REACT PIZZA CO.
        </Link>
        <form onSubmit={submitOrder}>
          <input
            type="text"
            placeholder="Search order #"
            className="px-4 py-2 rounded-full bg-yellow-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchquery}
          />
        </form>

        {user}
      </div>
    </header>
  );
}
