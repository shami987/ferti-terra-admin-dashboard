import { useEffect, useState } from 'react';
import { dashboardAPI } from '../services/api';
import { DoctorDashboardData } from '../types';

const DoctorDashboard = () => {
  const [data, setData] = useState<DoctorDashboardData>({
    stats: { todayAppointments: 0, totalPatients: 0, pendingConsultations: 0, completedToday: 0 },
    appointments: [],
    recentPatients: [],
  });

  useEffect(() => {
    dashboardAPI.getDoctorDashboard().then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Doctor Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Today's Appointments</div>
          <div className="text-2xl font-bold text-blue-600">{data.stats.todayAppointments}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Total Patients</div>
          <div className="text-2xl font-bold text-green-600">{data.stats.totalPatients}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Pending</div>
          <div className="text-2xl font-bold text-orange-600">{data.stats.pendingConsultations}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-500">Completed Today</div>
          <div className="text-2xl font-bold text-purple-600">{data.stats.completedToday}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Today's Appointments</h3>
          <div className="space-y-3">
            {data.appointments.map(apt => (
              <div key={apt.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">{apt.patientName}</div>
                  <div className="text-sm text-gray-500">{apt.time}</div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  apt.status === 'completed' ? 'bg-green-100 text-green-800' :
                  apt.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Patients</h3>
          <div className="space-y-3">
            {data.recentPatients.map(patient => (
              <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{patient.name}</div>
                    <div className="text-sm text-gray-500">Last visit: {patient.lastVisit}</div>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
