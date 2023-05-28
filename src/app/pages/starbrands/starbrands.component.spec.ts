import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbrandsComponent } from './starbrands.component';

describe('StarbrandsComponent', () => {
  let component: StarbrandsComponent;
  let fixture: ComponentFixture<StarbrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarbrandsComponent]
    });
    fixture = TestBed.createComponent(StarbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
