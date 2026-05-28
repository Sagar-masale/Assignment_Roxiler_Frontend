import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="text-gray-500 mt-4 text-xl">Page not found</p>

        <Link
          to="/"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
