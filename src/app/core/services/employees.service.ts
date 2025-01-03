import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private readonly employeesUrl = '/employees';

  constructor(private apiService: ApiService) {}

  getAllEmployees(): Observable<any[]> {
    return this.apiService.get<any[]>(this.employeesUrl);
  }

  getEmployeeById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.employeesUrl}/${id}`);
  }

  addEmployee(data: { name: string; role: string; email: string }): Observable<any> {
    return this.apiService.post<any>(this.employeesUrl, data);
  }

  updateEmployee(id: string, data: { name?: string; role?: string; email?: string }): Observable<any> {
    return this.apiService.patch<any>(`${this.employeesUrl}/${id}`, data);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.employeesUrl}/${id}`);
  }
}
