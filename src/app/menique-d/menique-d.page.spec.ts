import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeniqueDPage } from './menique-d.page';

describe('MeniqueDPage', () => {
  let component: MeniqueDPage;
  let fixture: ComponentFixture<MeniqueDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniqueDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniqueDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
