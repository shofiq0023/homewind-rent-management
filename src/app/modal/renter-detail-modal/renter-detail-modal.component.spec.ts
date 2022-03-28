import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterDetailModalComponent } from './renter-detail-modal.component';

describe('RenterDetailModalComponent', () => {
  let component: RenterDetailModalComponent;
  let fixture: ComponentFixture<RenterDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
