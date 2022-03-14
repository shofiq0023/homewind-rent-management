import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterModalComponent } from './renter-modal.component';

describe('RenterModalComponent', () => {
  let component: RenterModalComponent;
  let fixture: ComponentFixture<RenterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
