import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import API from "../../api/axios";

import AdminLayout from "../../layouts/AdminLayout";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    totalUsers: 0,
    totalStores: 0,
    totalRatings: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/admin/dashboard");

      setDashboard(data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <p className="text-gray-500 mt-2">Platform overview</p>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border rounded-2xl p-8">
              <p className="text-gray-500">Total Users</p>

              <h1 className="text-5xl font-bold mt-4">
                {dashboard.totalUsers}
              </h1>
            </div>

            <div className="bg-white border rounded-2xl p-8">
              <p className="text-gray-500">Total Stores</p>

              <h1 className="text-5xl font-bold mt-4">
                {dashboard.totalStores}
              </h1>
            </div>

            <div className="bg-white border rounded-2xl p-8">
              <p className="text-gray-500">Total Ratings</p>

              <h1 className="text-5xl font-bold mt-4">
                {dashboard.totalRatings}
              </h1>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
