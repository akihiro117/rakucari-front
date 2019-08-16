import { TestBed } from '@angular/core/testing';

import { GoodsDetailService } from './goods-detail.service';

describe('GoodsDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsDetailService = TestBed.get(GoodsDetailService);
    expect(service).toBeTruthy();
  });
});
