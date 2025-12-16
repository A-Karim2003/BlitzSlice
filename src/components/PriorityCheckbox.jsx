import React from "react";

export default function PriorityCheckbox({ checked, onChange }) {
  return (
    <div className="mb-8">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-5 h-5 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
        />
        <span className="text-gray-700">
          Want to yo give your order priority?
        </span>
      </label>
    </div>
  );
}
