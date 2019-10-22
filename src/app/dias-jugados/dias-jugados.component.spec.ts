import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasJugadosComponent } from './dias-jugados.component';

describe('DiasJugadosComponent', () => {
  let component: DiasJugadosComponent;
  let fixture: ComponentFixture<DiasJugadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasJugadosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasJugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
