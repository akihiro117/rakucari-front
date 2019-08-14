import { RecentGoodsResponse } from './recent-goods-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecentGoodsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * カテゴリーごとの最近出品された商品の情報を取得する。
   *
   * @return 最近追加された商品情報(商品のカテゴリー、商品名、商品の画像のURL)の配列
   */
  public fetchRecentAddedGoods(): Observable<RecentGoodsResponse> {

    return this.httpClient.get('http://localhost:8080/latest-goods')
      .pipe(map(resJson => {
        return resJson as RecentGoodsResponse;
      }));
  }
}
