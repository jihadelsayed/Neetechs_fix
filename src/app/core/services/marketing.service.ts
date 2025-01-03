import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {
  private readonly marketingUrl = '/marketing';

  constructor(private apiService: ApiService) {}

  getAllCampaigns(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.marketingUrl}/campaigns`);
  }

  getCampaignById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.marketingUrl}/campaigns/${id}`);
  }

  createCampaign(data: { name: string; targetAudience: string; budget: number }): Observable<any> {
    return this.apiService.post<any>(`${this.marketingUrl}/campaigns`, data);
  }

  updateCampaign(id: string, data: { name?: string; targetAudience?: string; budget?: number }): Observable<any> {
    return this.apiService.patch<any>(`${this.marketingUrl}/campaigns/${id}`, data);
  }

  deleteCampaign(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.marketingUrl}/campaigns/${id}`);
  }

  getAnalytics(): Observable<any> {
    return this.apiService.get<any>(`${this.marketingUrl}/analytics`);
  }
}
