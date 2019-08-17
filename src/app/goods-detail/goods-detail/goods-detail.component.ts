import { GoodsDetailService } from './goods-detail.service';
import { Component, OnInit } from '@angular/core';
import { Goods } from './goods';

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.scss']
})
export class GoodsDetailComponent implements OnInit {

  // 商品の詳細情報。
  public goods: Goods = new Goods();

  constructor(
    private goodsDetailService: GoodsDetailService
  ) { }

  ngOnInit() {
    this.fetchGoodsDetail();
  }

  /**
   * serviceから商品情報を取得して、商品情報の変数に格納する。
   */
  public fetchGoodsDetail(): void {
    this.goodsDetailService.fetchGoodsDetail('1')
      .subscribe(response => {
        this.goods = response.goodsDetail;
      });
  }

}
