import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  loginUsers = [
    {
      username: 'admin',
      password: 'admin123',
      role: 'Admin',
    },
    {
      username: 'dhanashree',
      password: 'dhana123',
      role: 'General User',
    },
    {
      username: 'rahul',
      password: 'rahul123',
      role: 'General User',
    },
    {
      username: 'anu',
      password: 'anu123',
      role: 'General User',
    },
  ];
  getUsers() {
    return new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'Admin',
            role: 'Admin',
            status: 'Active',
          },
          {
            name: 'Dhanashree',
            role: 'General User',
            status: 'Active',
          },
          {
            name: 'Rahul',
            role: 'General User',
            status: 'Pending',
          },
          {
            name: 'Anu',
            role: 'General User',
            status: 'Active',
          },
          {
            name: 'John',
            role: 'General User',
            status: 'Pending',
          },
          {
            name: 'Jane',
            role: 'General User',
            status: 'Active',
          },
          {
            name: 'Doe',
            role: 'General User',
            status: 'Pending',
          },
        ]);
      }, 3000);
    });
  }
}
