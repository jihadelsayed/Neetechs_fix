import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegrationsService {
  private readonly integrationsUrl = '/integrations';

  constructor(private apiService: ApiService) {}

  getAllIntegrations(): Observable<any[]> {
    return this.apiService.get<any[]>(this.integrationsUrl);
  }

  getIntegrationById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.integrationsUrl}/${id}`);
  }

  createIntegration(data: { name: string; type: string; config: any }): Observable<any> {
    return this.apiService.post<any>(this.integrationsUrl, data);
  }

  updateIntegration(id: string, data: { name?: string; type?: string; config?: any }): Observable<any> {
    return this.apiService.patch<any>(`${this.integrationsUrl}/${id}`, data);
  }

  deleteIntegration(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.integrationsUrl}/${id}`);
  }
}
