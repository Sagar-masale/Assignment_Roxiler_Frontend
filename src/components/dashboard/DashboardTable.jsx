const DashboardTable = ({ headers, data }) => {
  return (
    <div className="overflow-auto bg-white rounded-2xl border">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((item, index) => (
              <th key={index} className="text-left p-4 whitespace-nowrap">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              {Object.values(row).map((value, i) => (
                <td key={i} className="p-4 whitespace-nowrap">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
