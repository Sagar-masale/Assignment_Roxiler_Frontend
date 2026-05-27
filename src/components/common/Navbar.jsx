import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const { logout, user } = useAuth()

  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="w-full h-[70px] bg-white border-b flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Store Rating Platform
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-gray-600 capitalize">{user?.role}</p>

        <button
          onClick={logoutHandler}
          className="bg-black text-white px-5 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar