import { useEffect, useState } from "react";
import API from "../../api/axios";
import OwnerLayout from "../../layouts/OwnerLayout";
import toast from "react-hot-toast";

const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/owner/ratings");

      setRatings(data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OwnerLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Ratings</h1>

          <p className="text-gray-500 mt-2">Users who rated your store</p>
        </div>

        <div className="bg-white rounded-2xl border overflow-auto">
          {loading ? (
            <div className="p-6">Loading...</div>
          ) : ratings.length === 0 ? (
            <div className="p-6 text-gray-500">No ratings found</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">User</th>

                  <th className="text-left p-4">Email</th>

                  <th className="text-left p-4">Rating</th>
                </tr>
              </thead>

              <tbody>
                {ratings.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="p-4">{item.user?.name}</td>

                    <td className="p-4">{item.user?.email}</td>

                    <td className="p-4 font-semibold">{item.rating} / 5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </OwnerLayout>
  );
};

export default Ratings;
