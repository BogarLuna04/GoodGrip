import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GripDerechoPage } from './grip-derecho.page';

describe('GripDerechoPage', () => {
  let component: GripDerechoPage;
  let fixture: ComponentFixture<GripDerechoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GripDerechoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GripDerechoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
