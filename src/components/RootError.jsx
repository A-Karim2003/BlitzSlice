import { useNavigate, useRouteError } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import Button from "./Button";
// Test ID: IIDSAT
export default function RootError() {
  const routeError = useRouteError();
  const errorMessage = routeError.data;
  const errorStatus = routeError.status;
  console.log(routeError);

  const navigate = useNavigate();

  return (
    <div
      className={`fixed inset-0 ${
        errorStatus !== 404 ? "top-15" : ""
      } bg-gray-100 flex items-center justify-center p-4`}
    >
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full flex items-center justify-center mb-4">
            <MdErrorOutline className="size-16 text-red-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h1>

          <p className="text-gray-600 mb-6">
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </p>

          <div className="w-full bg-gray-50 rounded p-4 mb-6 text-left">
            <p className="text-sm font-mono text-gray-700 ">{errorMessage}</p>
          </div>

          <div className="flex gap-3">
            <Button
              className="px-6 py-2"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-4xl hover:bg-gray-300 transition-colors cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
