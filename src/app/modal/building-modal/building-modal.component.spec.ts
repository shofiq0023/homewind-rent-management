import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingModalComponent } from './building-modal.component';

describe('BuildingModalComponent', () => {
  let component: BuildingModalComponent;
  let fixture: ComponentFixture<BuildingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
