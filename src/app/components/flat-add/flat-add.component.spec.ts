import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatAddComponent } from './flat-add.component';

describe('FlatAddComponent', () => {
  let component: FlatAddComponent;
  let fixture: ComponentFixture<FlatAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
