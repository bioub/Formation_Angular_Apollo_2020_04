import { inject, TestBed } from '@angular/core/testing';

import { FakeContactService } from './fake-contact.service';

describe('FakeContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeContactService]
    });
  });

  it('should be created', inject([FakeContactService], (service: FakeContactService) => {
    expect(service).toBeTruthy();
  }));
});
