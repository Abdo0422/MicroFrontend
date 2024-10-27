import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSignal = signal<any>(this.getUserFromLocalStorage());

  login(credentials: { username: string; password: string }) {
    if (credentials.username === 'client' && credentials.password === '12345678') {
      const user = { role: 'client' };
      this.setUserInLocalStorage(user);
      this.userSignal.set(user);
    } else if (credentials.username === 'employee' && credentials.password === '12345678') {
      const user = { role: 'employee' };
      this.setUserInLocalStorage(user);
      this.userSignal.set(user);
    }
  }

  getUser() {
    return this.userSignal();
  }

  logout() {
    this.setUserInLocalStorage(null);
    this.userSignal.set(null);
  }

  isLoggedIn() {
    return !!this.userSignal();
  }

  private setUserInLocalStorage(user: any) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  private getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
