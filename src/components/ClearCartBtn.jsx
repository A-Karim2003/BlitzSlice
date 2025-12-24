export default function ClearCartBtn({ onClick }) {
  return (
    <button
      className="text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5 cursor-pointer"
      onClick={onClick}
    >
      Clear Cart
    </button>
  );
}
