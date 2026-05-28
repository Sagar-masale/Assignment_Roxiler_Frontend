import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../../api/axios";

import AdminLayout from "../../layouts/AdminLayout";

import SearchBar from "../../components/common/SearchBar";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.address.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredUsers(filtered);
  }, [search, users]);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/admin/users");

      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Users</h1>

            <p className="text-gray-500 mt-2">Manage platform users</p>
          </div>

          <Link
            to="/admin/create-user"
            className="bg-black text-white px-5 py-3 rounded-xl"
          >
            Create User
          </Link>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        {loading ? (
          <Loader />
        ) : filteredUsers.length === 0 ? (
          <EmptyState title="No users found" />
        ) : (
          <div className="overflow-auto bg-white rounded-2xl border">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Name</th>

                  <th className="text-left p-4">Email</th>

                  <th className="text-left p-4">Address</th>

                  <th className="text-left p-4">Role</th>

                  <th className="text-left p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id} className="border-t">
                    <td className="p-4 whitespace-nowrap">{user.name}</td>

                    <td className="p-4 whitespace-nowrap">{user.email}</td>

                    <td className="p-4 min-w-[250px]">{user.address}</td>

                    <td className="p-4 capitalize">{user.role}</td>

                    <td className="p-4">
                      <Link
                        to={`/admin/user/${user._id}`}
                        className="bg-black text-white px-4 py-2 rounded-lg"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Users;
