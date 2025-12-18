export default function FullPageSpinner() {
  return (
    <div className="fixed inset-0 top-15 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-600 font-medium text-xl">Loading...</p>
      </div>
    </div>
  );
}
