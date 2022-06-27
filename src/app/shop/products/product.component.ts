import { Product } from './../../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idStore = this.route.snapshot.paramMap.get('idStore');
    const idProduct = this.route.snapshot.paramMap.get('idProduct');
    this.GetProductById(idStore, idProduct);
  }

  GetProductById(idStore, idProduct) {
    this.dataService.getProductById(idStore, idProduct).subscribe(
      (respose) => {
        (this.product = respose), console.log(idProduct);
      },
      (err: any) => console.log(err)
    );
  }

  backPage(): void {
    this.location.back();
  }
}
