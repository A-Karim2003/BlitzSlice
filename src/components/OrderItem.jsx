import React from "react";

export default function OrderItem({ item }) {
  return (
    <div key={item.id} className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-lg font-medium mb-1">
          {item.quantity}× {item.name}
        </p>
        <p className="text-gray-500 italic text-sm">{item.ingredients}</p>
      </div>
      <p className="font-semibold text-lg">€{item.price.toFixed(2)}</p>
    </div>
  );
}
