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

export const dashboardAPI = {
  getStats: () => Promise.resolve({ data: mockStats }),
  getUsers: () => Promise.resolve({ data: mockUsers }),
};
