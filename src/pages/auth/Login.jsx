import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import API from "../../api/axios"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const { data } = await API.post(
        "/auth/login",
        formData
      )

      login(data)

      toast.success("Login successful")

      if (data.user.role === "admin") {
        navigate("/admin")
      }

      if (data.user.role === "user") {
        navigate("/stores")
      }

      if (data.user.role === "owner") {
        navigate("/owner")
      }
    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-10 rounded-3xl border w-[450px] space-y-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <button
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          {loading ? "Please wait..." : "Login"}
        </button>

        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-black font-semibold"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login