import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManItemComponent } from './man-item.component';

describe('ManListComponent', () => {
  let component: ManItemComponent;
  let fixture: ComponentFixture<ManItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManItemComponent]
    });
    fixture = TestBed.createComponent(ManItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
