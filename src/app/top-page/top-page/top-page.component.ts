import { LatestGoodsResponse } from './latest-goods-response';
import { LatestGoodsService } from './latest-goods.service';
import { Component, OnInit } from '@angular/core';
import { Goods } from './goods';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  // 商品データ。
  // key: カテゴリー名, value: 商品データのリスト。
  public latestAddedGoods: LatestGoodsResponse;

  constructor(private latestGoodsService: LatestGoodsService) { }

  ngOnInit() {
    this.fetchLatestAddedGoods();
  }

  /**
   * serviceを使用してAPIから最近追加した商品を取得。
   */
  public fetchLatestAddedGoods(): void {
    this.latestGoodsService.fetchLatestAddedGoods()
      .subscribe(response => {
        this.latestAddedGoods = response;
      });
  }

}
