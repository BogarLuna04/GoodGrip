import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceDPage } from './indice-d.page';

describe('IndiceDPage', () => {
  let component: IndiceDPage;
  let fixture: ComponentFixture<IndiceDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
