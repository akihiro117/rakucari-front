import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GoodsDetailResponse } from './goods-detail-response';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goods } from './goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsDetailService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public fetchGoodsDetail(goodsId: string): Observable<GoodsDetailResponse> {
    return this.httpClient.get(`http://localhost:8080/goods-detail/${goodsId}`)
      .pipe(
        map(resJson => {
          return resJson as GoodsDetailResponse;
        })
      );
  }

}
