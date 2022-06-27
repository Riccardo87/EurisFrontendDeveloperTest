import { ProductFormComponent } from './../shop/products/product-form.component';
import { ProductComponent } from './../shop/products/product.component';
import { ShopComponent } from '../shop/shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from '../shop/products/products-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from '../shop/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'stores/:idStore/products', component: ProductsListComponent },
  { path: 'stores/:idStore/products/:idProduct', component: ProductComponent },
  { path: 'stores/:idStore/product/add', component: ProductFormComponent },
  { path: 'stores/:idStore/stats/categories', component: ChartComponent },
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductFormComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ProductsListComponent,
    ProductComponent,
    ProductFormComponent,
    ChartComponent,
  ],
})
export class DataModule {}
