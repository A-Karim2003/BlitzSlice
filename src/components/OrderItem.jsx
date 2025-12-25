import { formatCurrency } from "../utils/helpers";
export default function OrderItem({ item }) {
  return (
    <div className="flex items-start justify-between border-b border-slate-300 pb-4">
      <div className="flex-1">
        <p className="text-lg font-medium mb-1">
          {item.quantity}× {item.name}
        </p>
        <p className="text-gray-500 italic text-sm">{item.ingredients}</p>
      </div>
      <p className="font-semibold text-lg">{formatCurrency(item.unitPrice)}</p>
    </div>
  );
}
