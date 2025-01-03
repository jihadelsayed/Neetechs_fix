import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = '/auth';

  constructor(private apiService: ApiService) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.apiService.post(`${this.authUrl}/login`, credentials);
  }

  register(data: { email: string; password: string; name: string }): Observable<any> {
    return this.apiService.post(`${this.authUrl}/register`, data);
  }

  getUserRole(): Observable<any> {
    return this.apiService.get(`${this.authUrl}/roles`);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Example implementation
  }
}
