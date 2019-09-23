import { UserInputData } from './user-input-data';
import { PutGoodsService } from './put-goods.service';
import { Component, OnInit } from '@angular/core';
import { PageData } from './page-data';

@Component({
  selector: 'app-put-goods',
  templateUrl: './put-goods.component.html',
  styleUrls: ['./put-goods.component.sass']
})
export class PutGoodsComponent implements OnInit {

  // セレクトリストの値。
  public goodsOptions: PageData = new PageData();

  // ユーザーの入力データ。
  public userInputData: UserInputData = new UserInputData();

  constructor(
    private putGoodsService: PutGoodsService
  ) { }

  ngOnInit() {
    this.fetchPageData();
    this.initFormOptionsValues();
  }

  /**
   * 入力フォームのセレクトリストの未入力時の値を設定する。
   */
  public initFormOptionsValues(): void {
    this.userInputData.category.id = '';
    this.userInputData.useStatus.id = '';
    this.userInputData.feeResponsibility.id = '';
    this.userInputData.srcRegion.id = '';
    this.userInputData.shippingDate.id = '';
  }

  /**
   * API からセレクトリストに表示する値を取得する。
   */
  public fetchPageData(): void {
    this.putGoodsService.fetchPageData()
      .subscribe(response => {
        this.goodsOptions = response;
      });
  }

}
