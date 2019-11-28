import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGripsPage } from './lista-grips.page';

describe('ListaGripsPage', () => {
  let component: ListaGripsPage;
  let fixture: ComponentFixture<ListaGripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGripsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
