import { RecentGoodsResponse } from './recent-goods-response';
import { RecentGoodsService } from './recent-goods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  // 商品データ。
  // key: カテゴリー名, value: 商品データのリスト。
  public recentAddedGoods: RecentGoodsResponse;

  constructor(private recentGoodsService: RecentGoodsService) { }

  ngOnInit() {
    this.fetchRecentAddedGoods();
  }

  ngAfterViewInit() {

  }

  /**
   * serviceを使用してAPIから最近追加した商品を取得。
   */
  public fetchRecentAddedGoods(): void {
    this.recentGoodsService.fetchRecentAddedGoods()
      .subscribe(response => {
        this.recentAddedGoods = response;
      });
  }

}
