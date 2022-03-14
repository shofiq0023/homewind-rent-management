import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatModalComponent } from './flat-modal.component';

describe('FlatModalComponent', () => {
  let component: FlatModalComponent;
  let fixture: ComponentFixture<FlatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
