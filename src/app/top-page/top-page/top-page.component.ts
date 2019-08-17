import { RecentGoodsResponse } from './recent-goods-response';
import { RecentGoodsService } from './recent-goods.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  // 最近追加された商品情報。
  public recentAddedGoods: RecentGoodsResponse;

  constructor(
    private recentGoodsService: RecentGoodsService,
    // routerを利用した画面遷移で必要。
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchRecentAddedGoods();
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

  /**
   * 最近追加された商品をクリックした時に商品詳細ページに遷移する。
   */
  public moveToGoodsDetailPage(id: string) {
    this.router.navigate([`/goods-detail/${id}`]);
  }

}
