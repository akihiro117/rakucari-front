import { TestBed } from '@angular/core/testing';

import { RecentGoodsService } from './recent-goods.service';

describe('RecentGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentGoodsService = TestBed.get(RecentGoodsService);
    expect(service).toBeTruthy();
  });
});
