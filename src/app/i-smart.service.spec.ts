import { TestBed, inject } from '@angular/core/testing';

import { ISmartService } from './i-smart.service';

describe('ISmartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ISmartService]
    });
  });

  it('should be created', inject([ISmartService], (service: ISmartService) => {
    expect(service).toBeTruthy();
  }));
});
