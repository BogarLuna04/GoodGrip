import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoyComponent } from './hoy.component';

describe('HoyComponent', () => {
  let component: HoyComponent;
  let fixture: ComponentFixture<HoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
