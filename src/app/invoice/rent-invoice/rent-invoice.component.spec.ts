import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentInvoiceComponent } from './rent-invoice.component';

describe('RentInvoiceComponent', () => {
  let component: RentInvoiceComponent;
  let fixture: ComponentFixture<RentInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
