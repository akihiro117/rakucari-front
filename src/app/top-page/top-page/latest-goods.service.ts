import { Goods } from './goods';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestGoodsService {

  constructor() { }

  /**
   * カテゴリーごとの最近出品された商品の情報を取得する。
   * TODO: 今はまだダミーのデータを返すが、APIが実装され次第、APIから取得する処理を実装する。
   * 
   * @return 最近追加された商品情報(商品のカテゴリー、商品名、商品の画像のURL)の配列
   */
  public fetchLatestAddedGoods(): Observable<Map<string, Array<Goods>>> {
    // ダミーのデータ。
    // TODO:後で本物に置き換える。
    let dummyDatum1 = new Goods();
    dummyDatum1.goodsName = "ダミーの商品1";
    dummyDatum1.imageUrl = "/assets/images/dummy-goods1/dummy1.png";

    let dummyDataList = new Array<Goods>();
    dummyDataList.push(dummyDatum1);

    let dummyDatum2 = new Goods();
    dummyDatum2.goodsName = "ダミーの商品2";
    dummyDatum2.imageUrl = "/assets/images/dummy-goods2/dummy2.png";

    let dummyDataList2 = new Array<Goods>();
    dummyDataList2.push(dummyDatum2);


    let goodsMap = new Map();
    goodsMap.set('カテゴリー1', dummyDataList);
    goodsMap.set('カテゴリー2', dummyDataList2);

    return of(goodsMap);
  }
}