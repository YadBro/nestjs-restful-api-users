import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private users: Array<CreateUserType> = [
    {
      id: 1,
      username: 'yadiganteng',
      email: 'yadi@gmail.com',
    },
    {
      id: 2,
      username: 'udin',
      email: 'udin@gmail.com',
    },
    {
      id: 3,
      username: 'bambang',
      email: 'bambang@gmail.com',
    },
  ];

  fetchUsers() {
    return this.users;
  }

  fetchUsersById(id: number) {
    return this.users.find((e) => e.id === id);
  }

  createUser(user: CreateUserType) {
    const id = this.users[this.users.length - 1].id + 1;
    return this.users.push({ id, ...user });
  }

  updateUser(id: number, userData: Partial<CreateUserType>) {
    const index = this.users.findIndex((e) => e.id === id);
    this.users[index] = { ...this.users[index], ...userData };
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((e) => e.id === id);
    this.users.splice(index, 1);
    return;
  }
}
