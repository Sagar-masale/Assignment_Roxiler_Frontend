import { useState } from "react"

const PasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    onSubmit(password)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-8 rounded-2xl border space-y-5"
    >
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-3 rounded-xl"
      />

      <button className="w-full bg-black text-white py-3 rounded-xl">
        Update Password
      </button>
    </form>
  )
}

export default PasswordForm