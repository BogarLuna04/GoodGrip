import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniqueIPage } from './menique-i.page';

describe('MeniqueIPage', () => {
  let component: MeniqueIPage;
  let fixture: ComponentFixture<MeniqueIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniqueIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniqueIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
