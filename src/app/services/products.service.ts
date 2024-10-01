import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://dshoowtachxohpojpidc.supabase.co/rest/v1/products';
  private apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG9vd3RhY2h4b2hwb2pwaWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDk5NTMsImV4cCI6MjA0MzM4NTk1M30.HkG3sBTSzOZPgWiL3MVdTcAL2UkELA2HLqqk_Fts3kA';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl, {
      headers: {
        apikey: this.apiKey,
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }
}
