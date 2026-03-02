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
