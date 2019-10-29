import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmaDPage } from './palma-d.page';

describe('PalmaDPage', () => {
  let component: PalmaDPage;
  let fixture: ComponentFixture<PalmaDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmaDPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmaDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
