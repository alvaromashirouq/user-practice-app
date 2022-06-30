import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import { AddUser } from './components/Users/AddUser';
import { UserList } from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState<any>([]);

  const addUserHandler = (username: string, age: string) => {
    setUserList((prevState: any) => [
      ...prevState,
      { id: nanoid(), username, age }
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
