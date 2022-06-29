import { StatsCategories } from '../models/stats-categories';
import { ApiProduct, Product } from '../models/product';
import { ApiStore, Store } from '../models/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const basePath = 'http://us-central1-test-b7665.cloudfunctions.net/api';

// @Injectable({
//   providedIn: 'root',
// })
// export class DataMockService {

//   private mockApiStore: ApiStore[] = [
//     {
//         id: '1',
//         data: [
//           name: 'Gigi',
//           category: 'Torta',
//           employees: 'Aldo', 'Giovanni'
//         ]
//     }
// ];

//   httpHeader = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     }),
//   };

//   getAllStores(): Observable<ApiStore[]> {
//     return of(this.mockApiStore)
//   }
// }
