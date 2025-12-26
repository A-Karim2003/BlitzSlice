export default function Button({
  onClick,
  children,
  className,
  disabled,
  type,
}) {
  return (
    <button
      className={`${className} rounded-full bg-yellow-400 font-semibold  tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed cursor-pointer `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
