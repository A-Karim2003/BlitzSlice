import Button from "./Button";

export default function NameCaptureForm({
  onChange,
  value,
  onKeydown,
  submitName,
}) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-2xl">👋</span>
        <p className="text-gray-700">
          Welcome! Please start by telling us your name:
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <input
          type="text"
          placeholder="Your full name"
          value={value}
          onChange={onChange}
          onKeyDown={onKeydown}
          className="px-6 py-3 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-80 shadow-sm"
        />

        <Button
          className="text-lg py-2 px-4 flex items-center gap-5"
          onClick={submitName}
        >
          Start ordering
        </Button>
      </div>
    </>
  );
}
