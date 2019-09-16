import { TestBed } from '@angular/core/testing';

import { PutGoodsService } from './put-goods.service';

describe('PutGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutGoodsService = TestBed.get(PutGoodsService);
    expect(service).toBeTruthy();
  });
});
