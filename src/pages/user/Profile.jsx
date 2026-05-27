import useAuth from "../../hooks/useAuth"
import UserLayout from "../../layouts/UserLayout"
import { Link } from "react-router-dom"

const Profile = () => {
  const { user } = useAuth()

  return (
    <UserLayout>
      <div className="max-w-3xl bg-white rounded-2xl border p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              Account details
            </p>
          </div>

          <Link
            to="/update-password"
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Update Password
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <h2 className="text-xl font-semibold mt-1">
              {user?.name}
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email Address
            </p>

            <h2 className="text-xl font-semibold mt-1">
              {user?.email}
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Address
            </p>

            <h2 className="text-xl font-semibold mt-1">
              {user?.address}
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>

            <h2 className="text-xl font-semibold capitalize mt-1">
              {user?.role}
            </h2>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}

export default Profile