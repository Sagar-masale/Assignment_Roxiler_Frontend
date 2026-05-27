import API from "../../api/axios"
import toast from "react-hot-toast"
import OwnerLayout from "../../layouts/OwnerLayout"
import PasswordForm from "../../components/forms/PasswordForm"

const UpdatePassword = () => {
  const submitHandler = async (password) => {
    try {
      const { data } = await API.put(
        "/owner/update-password",
        {
          password,
        }
      )

      toast.success(data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <OwnerLayout>
      <div className="max-w-xl">
        <PasswordForm onSubmit={submitHandler} />
      </div>
    </OwnerLayout>
  )
}

export default UpdatePassword