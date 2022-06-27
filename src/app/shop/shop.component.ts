import { DataService } from './../core/data.service';
import { Product } from './../models/product';
import { Store } from './../models/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  stores: Store[];
  products: Product[];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getAllStores().subscribe(
      (respose: any) => {
        (this.stores = respose), console.log(respose);
      },
      (err: any) => console.log(err)
    );
  }

  getStoreById(idStore) {
    this.dataService.getStoreById(idStore).subscribe((respose) => {
      console.log(respose);
    });
  }

  pageGetAllProducts(idStore) {
    this.router.navigate(['stores', idStore, 'products']);
  }
}
