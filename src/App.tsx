import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Doctors from './pages/Doctors';
import Analytics from './pages/Analytics';
import DoctorDashboard from './pages/DoctorDashboard';
import Appointments from './pages/Appointments';
import Patients from './pages/Patients';

function App() {
  const [role, setRole] = useState<'admin' | 'doctor' | null>(null);

  const handleLogin = (userRole: 'admin' | 'doctor') => {
    setRole(userRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar role={role} onLogout={handleLogout} />
        <div className="ml-64 flex-1 bg-gray-100 min-h-screen">
          <TopNavBar role={role} onLogout={handleLogout} />
          <div className="p-8">
            <Routes>
              {role === 'admin' ? (
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              ) : (
                <>
                  <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/patients" element={<Patients />} />
                  <Route path="*" element={<Navigate to="/doctor-dashboard" />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
