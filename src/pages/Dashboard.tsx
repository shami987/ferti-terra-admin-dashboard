import { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import { dashboardAPI } from '../services/api';
import { DashboardStats } from '../types';

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeToday: 0,
    newToday: 0,
    consultations: 0,
  });

  useEffect(() => {
    dashboardAPI.getStats().then(res => setStats(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={stats.totalUsers} icon="👥" color="text-blue-500" />
        <StatCard title="Active Today" value={stats.activeToday} icon="✅" color="text-green-500" />
        <StatCard title="New Today" value={stats.newToday} icon="🆕" color="text-purple-500" />
        <StatCard title="Consultations" value={stats.consultations} icon="📅" color="text-orange-500" />
      </div>
    </div>
  );
};

export default Dashboard;
