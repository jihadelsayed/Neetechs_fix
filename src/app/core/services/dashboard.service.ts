import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly dashboardUrl = '/dashboard';

  constructor(private apiService: ApiService) {}

  getOverview(): Observable<any> {
    return this.apiService.get(`${this.dashboardUrl}/overview`);
  }

  getRepairStatistics(): Observable<any> {
    return this.apiService.get(`${this.dashboardUrl}/repair-statistics`);
  }
}
