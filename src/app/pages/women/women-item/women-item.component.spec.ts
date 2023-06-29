import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenItemComponent } from './women-item.component';

describe('WomenItemComponent', () => {
  let component: WomenItemComponent;
  let fixture: ComponentFixture<WomenItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenItemComponent]
    });
    fixture = TestBed.createComponent(WomenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
