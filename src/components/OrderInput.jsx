export default function OrderInput({ label, children, inputId, type, name }) {
  return (
    <div className="mb-6 flex gap-6">
      <label htmlFor={inputId} className="block text-gray-700 mb-2  w-30">
        {label}
      </label>
      <div className="relative h-12 flex-1">
        <input
          name={name}
          type={type ? type : ""}
          id={inputId}
          className="w-full h-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-40"
        />
        {children}
      </div>
    </div>
  );
}
