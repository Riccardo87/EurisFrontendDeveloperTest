import { StatsCategories } from './../models/stats-categories';
import { ApiProduct, Product } from './../models/product';
import { ApiStore, Store } from './../models/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const basePath = 'http://us-central1-test-b7665.cloudfunctions.net/api';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllStores(): Observable<ApiStore[]> {
    return this.http
      .get<ApiStore[]>(`${basePath}/stores`)
      .pipe(catchError(this.httpError));
  }

  getStoreById(idStore: string): Observable<Store> {
    return this.http
      .get<Store>(`${basePath}/stores/${idStore}`)
      .pipe(catchError(this.httpError));
  }

  getAllProducts(idStore: string): Observable<ApiProduct[]> {
    return this.http
      .get<ApiProduct[]>(`${basePath}/stores/${idStore}/products`)
      .pipe(catchError(this.httpError));
  }

  addProduct(idStore: string, newProduct: Product): Observable<Product> {
    return this.http
      .post<string>(`${basePath}/stores/${idStore}/products`, newProduct, {
        responseType: 'text' as 'json',
      })
      .pipe(map(() => newProduct))
      .pipe(catchError(this.httpError));
  }

  getProductById(idStore: string, idProduct: string): Observable<Product> {
    return this.http
      .get<Product>(`${basePath}/stores/${idStore}/products/${idProduct}`)
      .pipe(catchError(this.httpError));
  }

  deleteProduct(idStore: string, idProduct: string): Observable<Product> {
    return this.http
      .delete<Product>(`${basePath}/stores/${idStore}/products/${idProduct}`)
      .pipe(catchError(this.httpError));
  }

  getProductsCategoryChart(idStore: string): Observable<StatsCategories[]> {
    return this.http
      .get<StatsCategories[]>(`${basePath}/stores/${idStore}/stats/categories`)
      .pipe(
        // switchMap(() => throwError('pippo')),
        catchError(this.httpError)
      );
  }

  httpError(error) {
    console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
    return throwError(error);
  }
}
