import { PageData } from './page-data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * 商品出品画面用のサービスクラス。
 */
export class PutGoodsService {

  constructor() { }

  /**
   * 商品出品ページのリストボックスに表示するデータをAPIから取得。
   */
  public fetchPageData(): Observable<PageData> {

    return of(new PageData());
  }
}
