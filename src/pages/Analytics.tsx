import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dashboardAPI } from '../services/api';
import { AnalyticsData } from '../types';

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData>({
    userGrowth: [],
    consultationStats: [],
  });

  useEffect(() => {
    dashboardAPI.getAnalytics().then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Consultation Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.consultationStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="consultations" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-sm text-gray-500 mb-2">Total Revenue</div>
          <div className="text-3xl font-bold text-gray-900">$45,231</div>
          <div className="text-sm text-green-600 mt-2">↑ 12% from last month</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-sm text-gray-500 mb-2">Avg. Consultation Time</div>
          <div className="text-3xl font-bold text-gray-900">28 min</div>
          <div className="text-sm text-blue-600 mt-2">↓ 5% from last month</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-sm text-gray-500 mb-2">Patient Satisfaction</div>
          <div className="text-3xl font-bold text-gray-900">4.8/5</div>
          <div className="text-sm text-green-600 mt-2">↑ 0.3 from last month</div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
