import { TestBed } from '@angular/core/testing';

import { StoragesService } from './storages.service';

describe('StoragesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoragesService = TestBed.get(StoragesService);
    expect(service).toBeTruthy();
  });
});
