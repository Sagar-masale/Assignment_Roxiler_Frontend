import { Link, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Sidebar = () => {
  const { user } = useAuth()

  const location = useLocation()

  if (!user) return null

  return (
    <div className="w-[250px] min-h-[calc(100vh-70px)] bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="flex flex-col gap-3">
        {user.role === "admin" && (
          <>
            <Link
              to="/admin"
              className={`p-3 rounded-xl ${
                location.pathname === "/admin"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/admin/users"
              className={`p-3 rounded-xl ${
                location.pathname ===
                "/admin/users"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Users
            </Link>

            <Link
              to="/admin/stores"
              className={`p-3 rounded-xl ${
                location.pathname ===
                "/admin/stores"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Stores
            </Link>

            <Link
              to="/admin/create-user"
              className={`p-3 rounded-xl ${
                location.pathname ===
                "/admin/create-user"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Create User
            </Link>

            <Link
              to="/admin/create-store"
              className={`p-3 rounded-xl ${
                location.pathname ===
                "/admin/create-store"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Create Store
            </Link>
          </>
        )}

        {user.role === "user" && (
          <>
            <Link
              to="/stores"
              className={`p-3 rounded-xl ${
                location.pathname === "/stores"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Stores
            </Link>

            <Link
              to="/profile"
              className={`p-3 rounded-xl ${
                location.pathname === "/profile"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Profile
            </Link>
          </>
        )}

        {user.role === "owner" && (
          <>
            <Link
              to="/owner"
              className={`p-3 rounded-xl ${
                location.pathname === "/owner"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/owner/ratings"
              className={`p-3 rounded-xl ${
                location.pathname ===
                "/owner/ratings"
                  ? "bg-white text-black"
                  : "hover:bg-zinc-800"
              }`}
            >
              Ratings
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Sidebar