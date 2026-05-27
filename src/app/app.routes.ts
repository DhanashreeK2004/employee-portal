import { Routes } from '@angular/router';
import { Login } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
];
