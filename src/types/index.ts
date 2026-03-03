export interface User {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  status: 'active' | 'inactive';
}

export interface DashboardStats {
  totalUsers: number;
  activeToday: number;
  newToday: number;
  consultations: number;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  patients: number;
  status: 'active' | 'inactive';
}

export interface AnalyticsData {
  userGrowth: { month: string; users: number }[];
  consultationStats: { day: string; consultations: number }[];
}

export interface DoctorDashboardData {
  stats: {
    todayAppointments: number;
    totalPatients: number;
    pendingConsultations: number;
    completedToday: number;
  };
  appointments: {
    id: string;
    patientName: string;
    time: string;
    status: 'pending' | 'completed' | 'scheduled';
  }[];
  recentPatients: {
    id: string;
    name: string;
    lastVisit: string;
  }[];
}

export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  type: string;
  status: 'pending' | 'completed' | 'scheduled';
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  lastVisit: string;
  totalVisits: number;
}
