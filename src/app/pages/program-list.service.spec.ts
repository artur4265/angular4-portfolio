import { TestBed, inject } from '@angular/core/testing';

import { ProgramListService } from './program-list.service';

describe('ProgramListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramListService]
    });
  });

  it('should be created', inject([ProgramListService], (service: ProgramListService) => {
    expect(service).toBeTruthy();
  }));
});
