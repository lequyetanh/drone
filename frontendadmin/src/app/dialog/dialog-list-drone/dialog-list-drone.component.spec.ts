import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListDroneComponent } from './dialog-list-drone.component';

describe('DialogListDroneComponent', () => {
  let component: DialogListDroneComponent;
  let fixture: ComponentFixture<DialogListDroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogListDroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogListDroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
