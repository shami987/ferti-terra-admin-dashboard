interface TopNavBarProps {
  role: 'admin' | 'doctor';
  onLogout: () => void;
}

const TopNavBar = ({ role, onLogout }: TopNavBarProps) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {role === 'admin' ? 'Admin Dashboard' : 'Doctor Portal'}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="text-xl">🔔</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <span className="text-xl">⚙️</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            {role === 'admin' ? 'A' : 'D'}
          </div>
          <button
            onClick={onLogout}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
