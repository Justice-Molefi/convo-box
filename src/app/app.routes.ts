import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [

    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

    { path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]},
    
  ];