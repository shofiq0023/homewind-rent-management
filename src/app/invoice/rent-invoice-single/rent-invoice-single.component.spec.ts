import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentInvoiceSingleComponent } from './rent-invoice-single.component';

describe('RentInvoiceSingleComponent', () => {
  let component: RentInvoiceSingleComponent;
  let fixture: ComponentFixture<RentInvoiceSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentInvoiceSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentInvoiceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
