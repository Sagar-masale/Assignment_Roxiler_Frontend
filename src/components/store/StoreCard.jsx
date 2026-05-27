import { useState } from "react"
import API from "../../api/axios"
import toast from "react-hot-toast"

const StoreCard = ({ store, fetchStores }) => {
  const [rating, setRating] = useState(1)

  const submitRating = async () => {
    try {
      const { data } = await API.post("/ratings/submit", {
        storeId: store._id,
        rating,
      })

      toast.success(data.message)

      fetchStores()
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="bg-white border rounded-2xl p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">
          {store.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {store.address}
        </p>
      </div>

      <div className="space-y-1">
        <p>
          Overall Rating:
          <span className="font-semibold ml-2">
            {store.avgRating?.toFixed(1)}
          </span>
        </p>

        <p>
          Your Rating:
          <span className="font-semibold ml-2">
            {store.userRating || "Not Rated"}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <select
          onChange={(e) => setRating(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button
          onClick={submitRating}
          className="bg-black text-white px-5 py-2 rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default StoreCard