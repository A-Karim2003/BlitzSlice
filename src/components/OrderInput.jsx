export default function OrderInput({
  label,
  children,
  inputId,
  type,
  name,
  error,
  defaultValue,
}) {
  const errorMessage = error?.[name];

  return (
    <div className="mb-6 flex max-sm:flex-col gap-2 ">
      <label htmlFor={inputId} className="block text-gray-700 mb-2  w-30">
        {label}
      </label>
      <div className="relative h-12 flex-1 flex flex-col gap-2 mb-6">
        <input
          defaultValue={defaultValue || ""}
          name={name}
          type={type ? type : ""}
          id={inputId}
          className="w-full h-full px-4 py-3 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-40"
        />
        {children}
        {errorMessage && (
          <span className="px-2 py-1 bg-red-200 text-red-500 rounded-sm">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
}
