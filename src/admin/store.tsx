import { createStore } from 'solid-js/store';
import { createEffect } from 'solid-js';
import { User } from './types'; // Make sure you have a User type defined

const loadUsers = (): User[] => {
  const usersJSON = localStorage.getItem('users');
  return usersJSON ? JSON.parse(usersJSON) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const initialUsers = loadUsers();

const [users, setUsers] = createStore<User[]>(initialUsers);

createEffect(() => {
  saveUsers(users);
});

const deleteUser = (id: number) => {
  setUsers(users => users.filter(user => user.id !== id));
};

const updateUser = (updatedUser: User) => {
  setUsers(users => users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
};

export { users, setUsers, deleteUser, updateUser };
