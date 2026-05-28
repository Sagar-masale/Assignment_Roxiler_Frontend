import { useState } from "react";
import API from "../../api/axios";
import toast from "react-hot-toast";

const RatingModal = ({ storeId, closeModal, fetchStores }) => {
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    try {
      setLoading(true);

      const { data } = await API.post("/ratings/submit", {
        storeId,
        rating,
      });

      toast.success(data.message);

      fetchStores();

      closeModal();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[400px] space-y-5">
        <h1 className="text-2xl font-semibold">Submit Rating</h1>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border rounded-xl p-3"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <div className="flex items-center gap-4">
          <button
            onClick={submitHandler}
            disabled={loading}
            className="flex-1 bg-black text-white py-3 rounded-xl"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button
            onClick={closeModal}
            className="flex-1 border py-3 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
