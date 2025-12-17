import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 h-15">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <span className="font-semibold uppercase text-sm tracking-wide">
          1 PIZZA €14.00
        </span>
        <Link
          className="font-semibold px-6 py-2 rounded-full uppercase text-sm transition-colors flex items-center gap-2 cursor-pointer"
          to="/cart"
        >
          Open Cart →
        </Link>
      </div>
    </footer>
  );
}
