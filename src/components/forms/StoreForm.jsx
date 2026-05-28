import { useState } from "react";

const StoreForm = ({ onSubmit, owners }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    owner: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white border rounded-2xl p-8 space-y-5"
    >
      <div>
        <h1 className="text-3xl font-bold">Create Store</h1>

        <p className="text-gray-500 mt-2">Add new store details</p>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Store Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Store Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      />

      <textarea
        name="address"
        placeholder="Store Address"
        value={formData.address}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 h-[120px]"
      />

      <button className="w-full bg-black text-white py-3 rounded-xl">
        Create Store
      </button>
      <select
        name="owner"
        onChange={handleChange}
        className="w-full border rounded-xl p-3"
      >
        <option value="">Select Owner</option>

        {owners.map((owner) => (
          <option key={owner._id} value={owner._id}>
            {owner.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default StoreForm;
