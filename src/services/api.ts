const mockStats = {
  totalUsers: 5234,
  activeToday: 1847,
  newToday: 47,
  consultations: 23,
};

const mockUsers = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', joinedDate: '2024-01-15', status: 'active' as const },
  { id: '2', name: 'Emma Wilson', email: 'emma@example.com', joinedDate: '2024-01-14', status: 'active' as const },
  { id: '3', name: 'Lisa Brown', email: 'lisa@example.com', joinedDate: '2024-01-13', status: 'active' as const },
];

const mockDoctors = [
  { id: '1', name: 'Dr. John Smith', specialty: 'Fertility', email: 'john@ferti.com', phone: '+1234567890', patients: 145, status: 'active' as const },
  { id: '2', name: 'Dr. Maria Garcia', specialty: 'Gynecology', email: 'maria@ferti.com', phone: '+1234567891', patients: 132, status: 'active' as const },
  { id: '3', name: 'Dr. James Lee', specialty: 'Endocrinology', email: 'james@ferti.com', phone: '+1234567892', patients: 98, status: 'active' as const },
  { id: '4', name: 'Dr. Emily Chen', specialty: 'Fertility', email: 'emily@ferti.com', phone: '+1234567893', patients: 167, status: 'active' as const },
];

const mockAnalytics = {
  userGrowth: [
    { month: 'Jan', users: 4200 },
    { month: 'Feb', users: 4500 },
    { month: 'Mar', users: 4800 },
    { month: 'Apr', users: 5000 },
    { month: 'May', users: 5234 },
  ],
  consultationStats: [
    { day: 'Mon', consultations: 45 },
    { day: 'Tue', consultations: 52 },
    { day: 'Wed', consultations: 48 },
    { day: 'Thu', consultations: 61 },
    { day: 'Fri', consultations: 55 },
  ],
};

export const dashboardAPI = {
  getStats: () => Promise.resolve({ data: mockStats }),
  getUsers: () => Promise.resolve({ data: mockUsers }),
  getDoctors: () => Promise.resolve({ data: mockDoctors }),
  getAnalytics: () => Promise.resolve({ data: mockAnalytics }),
};
