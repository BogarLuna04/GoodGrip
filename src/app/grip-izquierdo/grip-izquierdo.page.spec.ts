import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GripIzquierdoPage } from './grip-izquierdo.page';

describe('GripIzquierdoPage', () => {
  let component: GripIzquierdoPage;
  let fixture: ComponentFixture<GripIzquierdoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GripIzquierdoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GripIzquierdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
