import { Product } from './../../models/product';
import { DataService } from 'src/app/core/data.service';
import { Location } from '@angular/common';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    employee: ['', Validators.required],
    price: ['', Validators.required],
    reviews: [''],
  });

  errorMessage: string = '';

  // productForm = new FormGroup({
  //   productTitle: new FormControl(''),
  //   productCategory: new FormControl(''),
  //   productDescrition: new FormControl(''),
  //   productEmployee: new FormControl(''),
  //   productPrice: new FormControl(''),
  //   productReviews: new FormControl(''),
  // });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  isValid(): boolean {
    return this.productForm.valid;
    // return this.productForm.valid ? true : false;
    // if (this.productForm.valid) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  addProduct() {
    if (!this.isValid()) {
      this.errorMessage = 'Devi compilare il Form';
      return;
    }
    const idStore = this.route.snapshot.paramMap.get('idStore');
    const apiProduct: Product = {
      title: this.productForm.value.title,
      category: this.productForm.value.category,
      price: this.productForm.value.price,
      employee: this.productForm.value.employee,
      description: this.productForm.value.description,
      reviews: [this.productForm.value.reviews],
    };
    console.warn(apiProduct);

    this.dataService.addProduct(idStore, apiProduct).subscribe(
      () => this.router.navigate(['stores', idStore, 'products']),
      () => (this.errorMessage = 'Devi compilare il Form')
    );
  }

  backPage(): void {
    this.location.back();
  }
}
