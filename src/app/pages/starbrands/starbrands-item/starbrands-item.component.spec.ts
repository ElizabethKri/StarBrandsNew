import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbrandsItemComponent } from './starbrands-item.component';

describe('StarbrandsListComponent', () => {
  let component: StarbrandsItemComponent;
  let fixture: ComponentFixture<StarbrandsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarbrandsItemComponent]
    });
    fixture = TestBed.createComponent(StarbrandsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
