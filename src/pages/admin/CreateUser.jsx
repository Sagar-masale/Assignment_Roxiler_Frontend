import { useState } from "react";
import API from "../../api/axios";
import toast from "react-hot-toast";
import UserForm from "../../components/forms/UserForm";
import AdminLayout from "../../layouts/AdminLayout";

const CreateUser = () => {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (formData) => {
    try {
      setLoading(true);

      const { data } = await API.post("/admin/create-user", formData);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl mx-auto">
        <UserForm onSubmit={submitHandler} loading={loading} />
      </div>
    </AdminLayout>
  );
};

export default CreateUser;
