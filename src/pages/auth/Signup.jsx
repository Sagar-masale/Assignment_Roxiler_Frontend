import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import API from "../../api/axios"

const Signup = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
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
        "/auth/signup",
        formData
      )

      toast.success(data.message)

      navigate("/")
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
        className="bg-white p-10 rounded-3xl border w-[500px] space-y-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Signup to continue
          </p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
        />

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full border rounded-xl p-3 h-[120px]"
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
          {loading ? "Please wait..." : "Signup"}
        </button>

        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-black font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup