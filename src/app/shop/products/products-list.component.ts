import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { ApiProduct, Product } from 'src/app/models/product';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  product: Product;
  products: ApiProduct[];
  idStore: string;
  statusLayout: boolean = true;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.idStore = this.route.snapshot.paramMap.get('idStore');
    this.getAllProducts(this.idStore);
  }

  getAllProducts(idStore) {
    this.dataService.getAllProducts(idStore).subscribe(
      (respose) => {
        (this.products = respose), console.log(respose);
      },
      (err: any) => console.log(err)
    );
  }

  deleteProduct(idStore, idProduct) {
    this.dataService.deleteProduct(idStore, idProduct).subscribe(
      (respose) => {
        this.product = respose;
        console.log(respose);
        this.ngOnInit();
      },
      (err: any) => console.log(err)
    );
  }

  pageGetProduct(idStore, idProduct) {
    this.router.navigate(['stores', idStore, 'products', idProduct]);
  }

  pagePostProduct(idStore) {
    this.router.navigate(['stores', idStore, 'product', 'add']);
  }

  pageGetChart(idStore) {
    this.router.navigate(['stores', idStore, 'stats', 'categories']);
  }

  backPage(): void {
    this.location.back();
  }

  openDialog(templateRef: TemplateRef<any>, idProduct: string) {
    this.dialog.open(templateRef, {
      data: {
        product: idProduct,
      },
    });
  }
}
