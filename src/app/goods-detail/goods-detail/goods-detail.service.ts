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
    // TODO: 後でAPIから取得する処理に書き換える。
    let dummyRes: GoodsDetailResponse = new GoodsDetailResponse();
    let dummyGoods: Goods = new Goods();

    dummyGoods.goodsName = '商品1';
    dummyGoods.imgUrl = '../../assets/images/dummy-goods1/dummy1.png';
    dummyGoods.category = 'カテゴリー1';
    dummyGoods.goodsStatus = '未使用';
    dummyGoods.feeResponsibility = '出品者負担';
    dummyGoods.srcRegion = '東京都';
    dummyGoods.shippingDate = '2〜3日で発送';
    dummyGoods.price = 1200;
    dummyGoods.description = 'これはダミーの商品です。';

    dummyRes.goodsDetail = dummyGoods;
    return of(dummyRes);
    // return this.httpClient.get(`http://localhost/goods-detail/${goodsId}`)
    //   .pipe(
    //     map(resJson => {
    //       return resJson as GoodsDetailResponse;
    //     })
    //   );
  }

}
