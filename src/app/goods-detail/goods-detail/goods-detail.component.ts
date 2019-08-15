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

  constructor() { }

  ngOnInit() {
    // ダミーのデータ。
    // TODO:APIを作成したら、APIから取得する処理をかく。
    this.goods.goodsName = '商品1';
    this.goods.imgUrl = '../../assets/images/dummy-goods1/dummy1.png';
    this.goods.category = 'カテゴリー1';
    this.goods.goodsStatus = '未使用';
    this.goods.feeResponsibility = '出品者負担';
    this.goods.srcRegion = '東京都';
    this.goods.shippingDate = '2〜3日で発送';
    this.goods.price = 1200;
    this.goods.description = 'これはダミーの商品です。';
  }

}
