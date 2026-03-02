import { useEffect, useState } from 'react';
import UserTable from '../components/UserTable';
import { dashboardAPI } from '../services/api';
import { User } from '../types';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    dashboardAPI.getUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <UserTable users={users} />
    </div>
  );
};

export default Users;
