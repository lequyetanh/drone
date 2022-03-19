import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDroneComponent } from './all-drone.component';

describe('AllDroneComponent', () => {
  let component: AllDroneComponent;
  let fixture: ComponentFixture<AllDroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
