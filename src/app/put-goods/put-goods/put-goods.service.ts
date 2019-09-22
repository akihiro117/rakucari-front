import { HttpClient } from '@angular/common/http';
import { PageData } from './page-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/**
 * 商品出品画面用のサービスクラス。
 */
export class PutGoodsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * 商品出品ページのリストボックスに表示するデータをAPIから取得。
   */
  public fetchPageData(): Observable<PageData> {

    return this.httpClient.get('http://localhost:8080/goods-options')
      .pipe(
        map(resJosn => {
          return resJosn as PageData;
        })
      );
  }
}
