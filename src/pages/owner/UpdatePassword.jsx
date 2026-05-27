import { useState } from "react"
import toast from "react-hot-toast"

import API from "../../api/axios"

import OwnerLayout from "../../layouts/OwnerLayout"

const UpdatePassword = () => {
  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[\W_]).{8,16}$/

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must contain uppercase and special character"
      )
    }

    try {
      setLoading(true)

      const { data } = await API.put(
          "/auth/update-password",
        {
          password,
        }
      )

      toast.success(data.message)

      setPassword("")
    } catch (error) {
      toast.error(
        error.response?.data?.message
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <OwnerLayout>
      <div className="max-w-xl bg-white border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Update Password
        </h1>

        <p className="text-gray-500 mb-8">
          Change your account password
        </p>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          <button className="w-full bg-black text-white py-3 rounded-xl">
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>
        </form>
      </div>
    </OwnerLayout>
  )
}

export default UpdatePassword