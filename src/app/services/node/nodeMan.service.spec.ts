import { TestBed } from '@angular/core/testing';

import { NodeService } from './nodeMan.service';

describe('NodeService', () => {
  let service: NodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
