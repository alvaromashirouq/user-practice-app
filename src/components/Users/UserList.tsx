import { FC } from 'react';
import { Card } from '../UI/Card';

interface User {
  id: string;
  username: string;
  age: string;
}
interface UserListProps {
  users: User[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
