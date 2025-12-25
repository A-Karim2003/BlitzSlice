import React from "react";

export default function PriorityCheckbox({ name, isChecked, setIsChecked }) {
  return (
    <div className="mb-8">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          name={name}
          className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <span className="text-gray-700">Want to give your order priority?</span>
      </label>
    </div>
  );
}
