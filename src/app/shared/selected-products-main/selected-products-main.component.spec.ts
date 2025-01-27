import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsMainComponent } from './selected-products-main.component';

describe('SelectedProductsMainComponent', () => {
  let component: SelectedProductsMainComponent;
  let fixture: ComponentFixture<SelectedProductsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedProductsMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedProductsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
