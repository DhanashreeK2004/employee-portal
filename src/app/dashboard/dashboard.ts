import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent {
  username = '';
  role = '';
  users: any[] = [];
  loading = true;
  newName = '';
  newRole = '';
  newStatus = '';
  currentRole = '';
  searchText = '';
  editingUser: any = null;
  constructor(
    private router: Router,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) {
    this.username = localStorage.getItem('username') || '';
    this.role = localStorage.getItem('role') || '';
    this.currentRole = localStorage.getItem('role') || '';
    this.loadUsers();
  }
  deleteUser(name: string) {
    this.users = this.users.filter((user) => user.name !== name);
    this.saveUsers();
  }
  addUser() {
    if (this.newName && this.newRole && this.newStatus) {
      if (this.editingUser) {
        this.editingUser.name = this.newName;
        this.editingUser.role = this.newRole;
        this.editingUser.status = this.newStatus;
        this.editingUser = null;
        this.saveUsers();
      } else {
        this.users.push({
          name: this.newName,
          role: this.newRole,
          status: this.newStatus,
        });
      }
      this.newName = '';
      this.newRole = '';
      this.newStatus = '';
    }
  }
  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }
  async loadUsers() {
    const storedUsers = localStorage.getItem('user');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = await this.userService.getUsers();
      this.saveUsers();
    }
    this.loading = false;
    this.cdr.detectChanges();
  }
  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  get filteredUsers() {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }
  editUser(user: any) {
    this.editingUser = user;
    this.newName = user.name;
    this.newRole = user.role;
    this.newStatus = user.status;
  }
}
