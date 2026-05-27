import { useState } from "react"

const UserForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "user",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-8 rounded-2xl border space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      />

      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
        className="w-full border p-3 rounded-xl h-[120px]"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      />

      <select
        name="role"
        onChange={handleChange}
        className="w-full border p-3 rounded-xl"
      >
        <option value="user">User</option>
        <option value="owner">Store Owner</option>
        <option value="admin">Admin</option>
      </select>

      <button
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        {loading ? "Please wait..." : "Submit"}
      </button>
    </form>
  )
}

export default UserForm