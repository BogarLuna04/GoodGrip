import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulgarIPage } from './pulgar-i.page';

describe('PulgarIPage', () => {
  let component: PulgarIPage;
  let fixture: ComponentFixture<PulgarIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulgarIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulgarIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
