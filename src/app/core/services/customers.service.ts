import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private readonly customersUrl = '/customers';

  constructor(private apiService: ApiService) {}

  getAllCustomers(): Observable<any[]> {
    return this.apiService.get<any[]>(this.customersUrl);
  }

  getCustomerById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.customersUrl}/${id}`);
  }

  createCustomer(data: { name: string; email: string; phone: string }): Observable<any> {
    return this.apiService.post<any>(this.customersUrl, data);
  }

  updateCustomer(id: string, data: { name?: string; email?: string; phone?: string }): Observable<any> {
    return this.apiService.patch<any>(`${this.customersUrl}/${id}`, data);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.customersUrl}/${id}`);
  }
}
