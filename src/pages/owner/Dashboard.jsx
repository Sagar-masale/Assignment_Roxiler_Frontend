import { useEffect, useState } from "react"
import API from "../../api/axios"
import OwnerLayout from "../../layouts/OwnerLayout"
import toast from "react-hot-toast"

const Dashboard = () => {
  const [data, setData] = useState({
    avgRating: 0,
    totalRatings: 0,
  })

  useEffect(() => {
    fetchDashboard()
  }, [])

  const fetchDashboard = async () => {
    try {
      const response = await API.get(
        "/owner/dashboard"
      )

      setData(response.data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <OwnerLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-8 rounded-2xl border">
          <h1 className="text-gray-500">
            Average Rating
          </h1>

          <p className="text-5xl font-bold mt-5">
            {data.avgRating?.toFixed(1)}
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border">
          <h1 className="text-gray-500">
            Total Ratings
          </h1>

          <p className="text-5xl font-bold mt-5">
            {data.totalRatings}
          </p>
        </div>
      </div>
    </OwnerLayout>
  )
}

export default Dashboard