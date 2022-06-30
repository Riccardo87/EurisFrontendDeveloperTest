import { Product } from './../../models/product';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListItemComponent } from './products-list-item.component';

import { HarnessLoader } from '@angular/cdk/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatAccordionHarness,
  MatExpansionPanelHarness,
} from '@angular/material/expansion/testing';

describe('ProductsListItemComponent', () => {
  let component: ProductsListItemComponent;
  let fixture: ComponentFixture<ProductsListItemComponent>;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatExpansionModule, NoopAnimationsModule],
      declarations: [ProductsListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should be able to toggle expansion state of panel', async () => {
    const panel = await loader.getHarness(MatExpansionPanelHarness);
    expect(await panel.isExpanded()).toBe(false);
    await panel.toggle();
    expect(await panel.isExpanded()).toBe(true);
  });

  it('should hide review', async () => {
    const productJSON: Product = {
      title: 'torta',
      category: 'torta al cioccolato',
      description: 'Buonissima',
      employee: 'aldo',
      price: 1,
      reviews: ['cioccolato', 'buono'],
    };
    const panel = await loader.getHarness(MatExpansionPanelHarness);
    expect(await panel.getTextContent()).toBe('Review:' + productJSON.reviews);
  });
});
