import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: '📊', label: 'Dashboard' },
    { path: '/users', icon: '👥', label: 'Users' },
    { path: '/doctors', icon: '👨⚕️', label: 'Doctors' },
    { path: '/analytics', icon: '📈', label: 'Analytics' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">FertiTerra</h1>
        <p className="text-sm text-gray-400">Admin Dashboard</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 hover:bg-gray-800 transition ${
              location.pathname === item.path ? 'bg-gray-800 border-l-4 border-primary' : ''
            }`}
          >
            <span className="text-2xl mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
