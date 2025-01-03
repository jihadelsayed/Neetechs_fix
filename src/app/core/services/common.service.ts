import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly commonUrl = '/common';

  constructor(private apiService: ApiService) {}

  getAuditLogs(): Observable<any> {
    return this.apiService.get(`${this.commonUrl}/audit-logs`);
  }
}
