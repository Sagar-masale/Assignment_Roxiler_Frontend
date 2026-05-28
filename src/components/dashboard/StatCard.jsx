const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border">
      <h2 className="text-lg text-gray-500">{title}</h2>

      <h1 className="text-4xl font-bold mt-4">{value}</h1>
    </div>
  );
};

export default StatCard;
