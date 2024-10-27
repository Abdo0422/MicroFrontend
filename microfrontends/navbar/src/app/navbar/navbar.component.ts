import { Component , OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isDropdownOpen: boolean = false;
  userRole: string | null = null;

  constructor(private authService: AuthService, private Router: Router) {}

  ngOnInit() {
    this.userRole = this.authService.getUser()?.role;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    
  }

  gotologin() {
    this.Router.navigate(['/login']);
  }
  logout() {
    this.authService.logout();
    this.userRole = null;
  }

}
