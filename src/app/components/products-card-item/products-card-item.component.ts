import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-card-item',
  templateUrl: './products-card-item.component.html',
  styleUrls: ['./products-card-item.component.scss'],
})
export class ProductsCardItemComponent implements OnInit {
  @Input() product: Product;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() detail: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
