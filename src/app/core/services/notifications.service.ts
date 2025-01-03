import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly notificationsUrl = '/notifications';

  constructor(private apiService: ApiService) {}

  getAllNotifications(): Observable<any[]> {
    return this.apiService.get<any[]>(this.notificationsUrl);
  }

  getNotificationById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.notificationsUrl}/${id}`);
  }

  createNotification(data: { title: string; message: string; type: string }): Observable<any> {
    return this.apiService.post<any>(this.notificationsUrl, data);
  }

  markAsRead(id: string): Observable<any> {
    return this.apiService.patch<any>(`${this.notificationsUrl}/${id}`, { isRead: true });
  }

  deleteNotification(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.notificationsUrl}/${id}`);
  }
}
