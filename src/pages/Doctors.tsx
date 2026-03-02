import { useEffect, useState } from 'react';
import { dashboardAPI } from '../services/api';
import { Doctor } from '../types';

type DoctorFormData = Pick<Doctor, 'name' | 'specialty' | 'email' | 'phone' | 'status'>;

const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  const [formData, setFormData] = useState<DoctorFormData>({
    name: '',
    specialty: '',
    email: '',
    phone: '',
    status: 'active',
  });

  useEffect(() => {
    dashboardAPI.getDoctors().then(res => setDoctors(res.data));
  }, []);

  const handleEdit = (doctor: Doctor) => {
    setEditingDoctor(doctor);
    setFormData({ name: doctor.name, specialty: doctor.specialty, email: doctor.email, phone: doctor.phone, status: doctor.status });
  };

  const handleSave = () => {
    setDoctors(doctors.map(d => d.id === editingDoctor?.id ? { ...d, ...formData } : d));
    setEditingDoctor(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this doctor?')) setDoctors(doctors.filter(d => d.id !== id));
  };

  const getStatusClassName = (status: Doctor['status']) =>
    status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';

  return (
    <div>
      <h2 className="mb-6 text-xl font-bold sm:text-2xl">Doctors Management</h2>

      <div className="space-y-4 md:hidden">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                {doctor.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="ml-3 min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">{doctor.name}</p>
                <p className="truncate text-xs text-gray-500">{doctor.email}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-gray-600">Specialty:</span> {doctor.specialty}
              </p>
              <p>
                <span className="font-medium text-gray-600">Phone:</span> {doctor.phone}
              </p>
              <p>
                <span className="font-medium text-gray-600">Patients:</span> {doctor.patients}
              </p>
              <p>
                <span className="font-medium text-gray-600">Status:</span>{' '}
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusClassName(doctor.status)}`}>
                  {doctor.status}
                </span>
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleEdit(doctor)}
                className="flex-1 rounded bg-blue-50 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(doctor.id)}
                className="flex-1 rounded bg-red-50 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-lg bg-white shadow md:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patients</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctors.map(doctor => (
              <tr key={doctor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                    {doctor.specialty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doctor.patients}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusClassName(doctor.status)}`}>
                    {doctor.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button onClick={() => handleEdit(doctor)} className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                  <button onClick={() => handleDelete(doctor.id)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-5 sm:p-6">
            <h3 className="text-xl font-bold mb-4">Edit Doctor</h3>
            <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Name" className="w-full mb-3 px-3 py-2 border rounded" />
            <input value={formData.specialty} onChange={e => setFormData({...formData, specialty: e.target.value})} placeholder="Specialty" className="w-full mb-3 px-3 py-2 border rounded" />
            <input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email" className="w-full mb-3 px-3 py-2 border rounded" />
            <input value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="Phone" className="w-full mb-3 px-3 py-2 border rounded" />
            <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as 'active' | 'inactive'})} className="w-full mb-4 px-3 py-2 border rounded">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="flex gap-2">
              <button onClick={handleSave} className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Save</button>
              <button onClick={() => setEditingDoctor(null)} className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
