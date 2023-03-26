import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private users: any[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
  ];
  constructor() { }


  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // store user details in local storage or session storage if required
      return true;
    } else {
      return false;
    }
  }
}
