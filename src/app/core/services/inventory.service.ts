import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private readonly inventoryUrl = '/inventory';

  constructor(private apiService: ApiService) {}

  getAllProducts(): Observable<any[]> {
    return this.apiService.get<any[]>(`${this.inventoryUrl}/products`);
  }

  getProductById(id: string): Observable<any> {
    return this.apiService.get<any>(`${this.inventoryUrl}/products/${id}`);
  }

  addProduct(data: { name: string; description: string; price: number }): Observable<any> {
    return this.apiService.post<any>(`${this.inventoryUrl}/products`, data);
  }

  updateProduct(id: string, data: { name?: string; description?: string; price?: number }): Observable<any> {
    return this.apiService.patch<any>(`${this.inventoryUrl}/products/${id}`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.apiService.delete<any>(`${this.inventoryUrl}/products/${id}`);
  }

  addStockHistory(data: { productId: string; quantity: number; action: string }): Observable<any> {
    return this.apiService.post<any>(`${this.inventoryUrl}/stock-history`, data);
  }
}
