import { TestBed } from '@angular/core/testing';

import { RegisterGoodsService } from './register-goods.service';

describe('RegisterGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterGoodsService = TestBed.get(RegisterGoodsService);
    expect(service).toBeTruthy();
  });
});
