import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneManagerComponent } from './drone-manager.component';

describe('DroneManagerComponent', () => {
  let component: DroneManagerComponent;
  let fixture: ComponentFixture<DroneManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
