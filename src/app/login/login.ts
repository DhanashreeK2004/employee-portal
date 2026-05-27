import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  username = '';
  password = '';
  role = '';
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}
  login() {
    const user = this.userService.loginUsers.find(
      (u) => u.username === this.username && u.password === this.password && u.role === this.role,
    );
    if (user) {
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  }
}
