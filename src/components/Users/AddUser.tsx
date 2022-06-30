import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

interface AddUserI {
  onAddUser: (user: string, age: string) => void;
}

export const AddUser = (props: AddUserI) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState<{
    title: string;
    message: string;
  } | null>();

  const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'lease enter a valid name and age (no empty values)'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'invalid age',
        message: 'Please enter a valid age (upper than 0)'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            name="username"
            type={'text'}
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">age</label>
          <input
            name="age"
            type={'number'}
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
