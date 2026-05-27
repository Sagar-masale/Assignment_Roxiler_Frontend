import { useEffect, useState } from "react"
import API from "../../api/axios"
import AdminLayout from "../../layouts/AdminLayout"
import StoreForm from "../../components/forms/StoreForm"
import toast from "react-hot-toast"

const CreateStore = () => {
  const [owners, setOwners] = useState([])

  useEffect(() => {
    fetchOwners()
  }, [])

  const fetchOwners = async () => {
    try {
      const { data } = await API.get(
        "/admin/store-owners"
      )

      setOwners(data)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const submitHandler = async (formData) => {
    try {
      const { data } = await API.post(
        "/admin/create-store",
        formData
      )

      toast.success(data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto">
        <StoreForm
          owners={owners}
          onSubmit={submitHandler}
        />
      </div>
    </AdminLayout>
  )
}

export default CreateStore