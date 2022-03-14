import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterAddComponent } from './renter-add.component';

describe('RenterAddComponent', () => {
  let component: RenterAddComponent;
  let fixture: ComponentFixture<RenterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
