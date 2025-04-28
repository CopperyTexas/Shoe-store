import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestModelComponent } from './best-model.component';

describe('BestModelComponent', () => {
  let component: BestModelComponent;
  let fixture: ComponentFixture<BestModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BestModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
