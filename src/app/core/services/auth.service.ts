import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserRole() {
    throw new Error('Method not implemented.');
  }
  isAuthenticated() {
    return true;
  }

  constructor() { }
}
