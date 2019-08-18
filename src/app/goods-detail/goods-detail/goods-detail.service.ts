import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GoodsDetailResponse } from './goods-detail-response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * APIから1つの商品の情報を取得するサービスクラス。
 */
export class GoodsDetailService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * 引数で指定されたIDの商品情報をAPIから取得。
   * @param goodsId 商品ID。
   */
  public fetchGoodsDetail(goodsId: string): Observable<GoodsDetailResponse> {
    return this.httpClient.get(`http://localhost:8080/goods-detail/${goodsId}`)
      .pipe(
        map(resJson => {
          return resJson as GoodsDetailResponse;
        })
      );
  }

}
