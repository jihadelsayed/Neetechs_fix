import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl; // Replace with your API's base URL

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}` // Add token logic if necessary
    });
  }

  private getToken(): string | null {
    // Logic to retrieve the token (if using JWT or other auth mechanisms)
    return localStorage.getItem('authToken');
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, { headers: this.getHeaders() });
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, data, { headers: this.getHeaders() });
  }

  patch<T>(url: string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${url}`, data, { headers: this.getHeaders() });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}`, { headers: this.getHeaders() });
  }
}
