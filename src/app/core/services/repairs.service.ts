import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {
  private readonly repairsUrl = '/repairs';

  constructor(private apiService: ApiService) {}

  getAllRepairs(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.repairsUrl}`);
  }

  getRepairById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.repairsUrl}/${id}`);
  }

  createRepair(data: { item: string; issue: string; customerId: string; status?: string }): Observable<any> {
    return this.apiService.post<any>(`${this.repairsUrl}`, data);
  }

  updateRepair(id: string, data: { status?: string; resolution?: string }): Observable<any> {
    return this.apiService.patch<any>(`${this.repairsUrl}/${id}`, data);
  }

  deleteRepair(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.repairsUrl}/${id}`);
  }
}
