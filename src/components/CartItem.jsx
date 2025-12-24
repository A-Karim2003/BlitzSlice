import { formatCurrency } from "../utils/helpers";
import CartItemControls from "./CartItemControls";

export default function CartItem({ item }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <span className="text-lg">
          {item.quantity}× {item.name}
        </span>
        <div className="flex items-center gap-6 ">
          <span className="font-semibold">
            {formatCurrency(item.unitPrice)}
          </span>
          <CartItemControls cartItem={item} />
        </div>
      </div>
    </div>
  );
}
