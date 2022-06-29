import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardItemComponent } from './products-card-item.component';

describe('ProductsCardItemComponent', () => {
  let component: ProductsCardItemComponent;
  let fixture: ComponentFixture<ProductsCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCardItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
