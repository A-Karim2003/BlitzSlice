import { useState } from "react";

export default function WelcomeScreen() {
  const [name, setName] = useState("");

  return (
    <div className="text-center max-w-2xl w-100">
      <h2 className="text-4xl font-semibold text-gray-800 mb-2">
        The best pizza.
      </h2>
      <p className="text-4xl font-semibold text-yellow-500 mb-12">
        Straight out of the oven, straight to you.
      </p>

      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-2xl">👋</span>
        <p className="text-gray-700">
          Welcome! Please start by telling us your name:
        </p>
      </div>

      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-6 py-3 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-80 shadow-sm"
      />
    </div>
  );
}
