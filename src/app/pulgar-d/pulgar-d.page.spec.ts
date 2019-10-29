import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulgarDPage } from './pulgar-d.page';

describe('PulgarDPage', () => {
  let component: PulgarDPage;
  let fixture: ComponentFixture<PulgarDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulgarDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulgarDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
