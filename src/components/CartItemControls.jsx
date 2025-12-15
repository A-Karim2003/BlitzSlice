import Button from "./Button";

export default function CartItemControls() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center">
        <Button className="w-9 h-9 flex items-center justify-center text-xl font-bold">
          −
        </Button>
        <span className="cursor-pointer text-lg font-semibold min-w-8 text-center">
          1
        </span>
        <Button className="cursor-pointer w-9 h-9 flex items-center justify-center text-xl font-bold">
          +
        </Button>
      </div>

      <Button className="cursor-pointer px-5 py-2 uppercase text-sm font-semibold">
        Delete
      </Button>
    </div>
  );
}
