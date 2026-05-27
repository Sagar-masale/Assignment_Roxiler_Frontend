const StoreTable = ({ stores }) => {
  return (
    <div className="overflow-auto bg-white rounded-2xl border">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">
              Store Name
            </th>

            <th className="text-left p-4">
              Email
            </th>

            <th className="text-left p-4">
              Address
            </th>

            <th className="text-left p-4">
              Rating
            </th>
          </tr>
        </thead>

        <tbody>
          {stores.map((store) => (
            <tr
              key={store._id}
              className="border-t"
            >
              <td className="p-4">
                {store.name}
              </td>

              <td className="p-4">
                {store.email}
              </td>

              <td className="p-4">
                {store.address}
              </td>

              <td className="p-4">
                {store.avgRating?.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StoreTable