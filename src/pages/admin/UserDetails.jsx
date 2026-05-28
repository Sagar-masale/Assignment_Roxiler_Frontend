import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import AdminLayout from "../../layouts/AdminLayout";
import toast from "react-hot-toast";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await API.get(`/admin/user/${id}`);

      setUser(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-2xl border p-8 max-w-2xl">
        <h1 className="text-3xl font-semibold mb-8">User Details</h1>

        <div className="space-y-4">
          <p>
            <span className="font-semibold">Name:</span> {user?.name}
          </p>

          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>

          <p>
            <span className="font-semibold">Address:</span> {user?.address}
          </p>

          <p>
            <span className="font-semibold">Role:</span> {user?.role}
          </p>

          {user?.role === "owner" && (
            <p>
              <span className="font-semibold">Store Rating:</span>{" "}
              {user?.rating?.toFixed(1)}
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserDetails;
