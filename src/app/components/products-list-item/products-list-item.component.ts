import { Product } from 'src/app/models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() detail: EventEmitter<void> = new EventEmitter<void>();
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  public pageGetProduct(router: string) {
    return router;
  }
}
