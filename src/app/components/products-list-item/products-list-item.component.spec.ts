import { Product } from './../../models/product';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListItemComponent } from './products-list-item.component';

import { HarnessLoader } from '@angular/cdk/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatExpansionPanelHarness } from '@angular/material/expansion/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductsListItemComponent', () => {
  let component: ProductsListItemComponent;
  let fixture: ComponentFixture<ProductsListItemComponent>;
  let loader: HarnessLoader;
  let productJSON: Product;

  beforeEach(async (done: DoneFn) => {
    await TestBed.configureTestingModule({
      imports: [MatExpansionModule, NoopAnimationsModule],
      declarations: [ProductsListItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductsListItemComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    productJSON = {
      title: 'torta al cioccolato',
      category: 'torta',
      description: 'fatta in casa',
      employee: 'aldo',
      price: 1,
      reviews: ['succulenta', 'very good'],
    };
    component = fixture.componentInstance;
    component.product = productJSON;
    fixture.detectChanges();
    done();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to toggle expansion state of panel', async () => {
    const panel = await loader.getHarness(MatExpansionPanelHarness);
    expect(await panel.isExpanded()).toBe(false);
    await panel.toggle();
    expect(await panel.isExpanded()).toBe(true);
  });

  it('should hide review', async () => {
    fixture.detectChanges();
    const panel = await loader.getHarness(MatExpansionPanelHarness);
    expect(await panel.getTextContent()).toBe(`Review: succulenta, very good`);
  });

  it('should have <p> with "Title: torta al cioccolato"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p')!;
    expect(p.textContent).toEqual(`Title: torta al cioccolato`);
  });

  it('should accept values', () => {
    expect(productJSON.title).toEqual('torta al cioccolato');
    expect(productJSON.category).toEqual('torta');
    expect(productJSON.description).toEqual('fatta in casa');
  });
});
