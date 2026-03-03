import { useEffect, useState } from 'react';
import { dashboardAPI } from '../services/api';
import { Patient } from '../types';

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    dashboardAPI.getPatients().then(res => setPatients(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Patients</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map(patient => (
          <div key={patient.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                {patient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-3">
                <div className="font-semibold text-gray-900">{patient.name}</div>
                <div className="text-sm text-gray-500">{patient.age} years</div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Email:</span> {patient.email}</div>
              <div><span className="font-medium">Phone:</span> {patient.phone}</div>
              <div><span className="font-medium">Last Visit:</span> {patient.lastVisit}</div>
              <div><span className="font-medium">Visits:</span> {patient.totalVisits}</div>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
