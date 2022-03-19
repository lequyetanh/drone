import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddNewDroneComponent } from './dialog-add-new-drone.component';

describe('DialogAddNewDroneComponent', () => {
  let component: DialogAddNewDroneComponent;
  let fixture: ComponentFixture<DialogAddNewDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddNewDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddNewDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
