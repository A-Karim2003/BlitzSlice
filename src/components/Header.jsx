export default function Header() {
  return (
    <header className="bg-yellow-400 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-mono tracking-wide">FAST REACT PIZZA CO.</h1>
      <input
        type="text"
        placeholder="Search order #"
        className="px-4 py-2 rounded-full bg-yellow-50 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-64"
      />
    </header>
  );
}
