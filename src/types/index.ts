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
