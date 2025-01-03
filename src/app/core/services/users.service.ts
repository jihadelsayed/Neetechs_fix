import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersUrl = '/users';

  constructor(private apiService: ApiService) {}

  getAllUsers(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.usersUrl}`);
  }

  getUserById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.usersUrl}/${id}`);
  }

  createUser(data: { name: string; email: string; role: string }): Observable<any> {
    return this.apiService.post<any>(`${this.usersUrl}`, data);
  }

  updateUser(id: string, data: { name?: string; email?: string; role?: string }): Observable<any> {
    return this.apiService.patch<any>(`${this.usersUrl}/${id}`, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.usersUrl}/${id}`);
  }
}
