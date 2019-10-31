import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmaIPage } from './palma-i.page';

describe('PalmaIPage', () => {
  let component: PalmaIPage;
  let fixture: ComponentFixture<PalmaIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmaIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmaIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
