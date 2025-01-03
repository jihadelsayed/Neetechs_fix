import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosService {
  private readonly posUrl = '/pos';

  constructor(private apiService: ApiService) {}

  getAllTransactions(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.posUrl}/transactions`);
  }

  getTransactionById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.posUrl}/transactions/${id}`);
  }

  createTransaction(data: { items: any[]; totalAmount: number; customerId?: string }): Observable<any> {
    return this.apiService.post<any>(`${this.posUrl}/transactions`, data);
  }

  updateTransaction(id: string, data: { items?: any[]; totalAmount?: number }): Observable<any> {
    return this.apiService.patch<any>(`${this.posUrl}/transactions/${id}`, data);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.posUrl}/transactions/${id}`);
  }

  getAvailableItems(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.posUrl}/items`);
  }
}
