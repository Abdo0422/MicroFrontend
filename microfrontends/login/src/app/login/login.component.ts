import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = { username: this.username, password: this.password };
    this.authService.login(credentials);

    if (this.authService.isLoggedIn()) {
      const user = this.authService.getUser();

      if (user.role === 'client') {
        this.router.navigate(['/']);
      } else if (user.role === 'employee') {
        if (this.router.config.find(route => route.path === 'employee-home')) {
          this.router.navigate(['/employee-home']);
        } else {
          alert('You are not an employee.');
        }
      }
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }

}
