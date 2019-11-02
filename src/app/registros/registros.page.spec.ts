import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosPage } from './registros.page';

describe('RegistrosPage', () => {
  let component: RegistrosPage;
  let fixture: ComponentFixture<RegistrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
