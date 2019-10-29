import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceIPage } from './indice-i.page';

describe('IndiceIPage', () => {
  let component: IndiceIPage;
  let fixture: ComponentFixture<IndiceIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
