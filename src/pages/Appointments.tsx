import { useEffect, useState } from 'react';
import { dashboardAPI } from '../services/api';
import { Appointment } from '../types';

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    dashboardAPI.getAppointments().then(res => setAppointments(res.data));
  }, []);

  const updateStatus = (id: string, status: Appointment['status']) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map(apt => (
              <tr key={apt.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{apt.patientName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{apt.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{apt.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{apt.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    apt.status === 'completed' ? 'bg-green-100 text-green-800' :
                    apt.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {apt.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {apt.status === 'scheduled' && (
                    <button onClick={() => updateStatus(apt.id, 'completed')} className="text-green-600 hover:text-green-800 mr-2">Complete</button>
                  )}
                  {apt.status !== 'completed' && (
                    <button onClick={() => updateStatus(apt.id, 'pending')} className="text-orange-600 hover:text-orange-800">Pending</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
