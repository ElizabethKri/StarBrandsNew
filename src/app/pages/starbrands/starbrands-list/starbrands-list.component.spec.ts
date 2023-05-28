import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbrandsListComponent } from './starbrands-list.component';

describe('StarbrandsListComponent', () => {
  let component: StarbrandsListComponent;
  let fixture: ComponentFixture<StarbrandsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarbrandsListComponent]
    });
    fixture = TestBed.createComponent(StarbrandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
