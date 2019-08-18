import { GoodsDetailService } from './goods-detail.service';
import { Component, OnInit } from '@angular/core';
import { Goods } from './goods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.scss']
})
export class GoodsDetailComponent implements OnInit {

  // 商品の詳細情報。
  public goods: Goods = new Goods();

  constructor(
    private goodsDetailService: GoodsDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchGoodsDetail();
  }

  /**
   * serviceから商品情報を取得して、商品情報の変数に格納する。
   */
  public fetchGoodsDetail(): void {
    // URLから商品IDを取得。
    const goodsId = this.route.snapshot.paramMap.get('id');
    // serviceから商品情報を取得し、変数に格納。
    this.goodsDetailService.fetchGoodsDetail(goodsId)
      .subscribe(response => {
        this.goods = response.goodsDetail;
      });
  }

}
