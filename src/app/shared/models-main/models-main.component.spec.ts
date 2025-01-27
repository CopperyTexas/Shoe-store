import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsMainComponent } from './models-main.component';

describe('ModelsMainComponent', () => {
  let component: ModelsMainComponent;
  let fixture: ComponentFixture<ModelsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModelsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
