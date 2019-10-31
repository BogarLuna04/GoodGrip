import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionesPage } from './conexiones.page';

describe('ConexionesPage', () => {
  let component: ConexionesPage;
  let fixture: ComponentFixture<ConexionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
