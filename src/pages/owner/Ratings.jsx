import { useEffect, useState } from "react"
import API from "../../api/axios"
import OwnerLayout from "../../layouts/OwnerLayout"
import toast from "react-hot-toast"

const Ratings = () => {
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    fetchRatings()
  }, [])

  const fetchRatings = async () => {
    try {
      const { data } = await API.get(
        "/owner/ratings"
      )

      setRatings(data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <OwnerLayout>
      <div className="bg-white rounded-2xl border overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">
                User
              </th>

              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>
            {ratings.map((item) => (
              <tr
                key={item._id}
                className="border-t"
              >
                <td className="p-4">
                  {item.user.name}
                </td>

                <td className="p-4">
                  {item.user.email}
                </td>

                <td className="p-4">
                  {item.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OwnerLayout>
  )
}

export default Ratings