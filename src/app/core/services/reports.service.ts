import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private readonly reportsUrl = '/reports';

  constructor(private apiService: ApiService) {}

  generateReport(data: { type: string; dateRange: { start: string; end: string } }): Observable<any> {
    return this.apiService.post<any>(`${this.reportsUrl}/generate`, data);
  }

  getAllReports(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.reportsUrl}`);
  }

  getReportById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.reportsUrl}/${id}`);
  }

  deleteReport(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.reportsUrl}/${id}`);
  }
}
