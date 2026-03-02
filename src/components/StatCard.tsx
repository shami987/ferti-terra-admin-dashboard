interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className={`text-4xl ${color}`}>{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
