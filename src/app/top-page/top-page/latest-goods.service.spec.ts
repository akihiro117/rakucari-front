import { TestBed } from '@angular/core/testing';

import { LatestGoodsService } from './latest-goods.service';

describe('LatestGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestGoodsService = TestBed.get(LatestGoodsService);
    expect(service).toBeTruthy();
  });
});
