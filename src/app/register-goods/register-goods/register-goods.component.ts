import { UserInputData } from './user-input-data';
import { RegisterGoodsService } from './register-goods.service';
import { Component, OnInit } from '@angular/core';
import { PageData } from './page-data';

@Component({
  selector: 'app-register-goods',
  templateUrl: './register-goods.component.html',
  styleUrls: ['./register-goods.component.sass']
})
export class RegisterGoodsComponent implements OnInit {

  // セレクトリストの値。
  public goodsOptions: PageData = new PageData();

  // ユーザーの入力データ。
  public userInputData: UserInputData = new UserInputData();

  constructor(
    private registerGoodsService: RegisterGoodsService
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
    this.registerGoodsService.fetchPageData()
      .subscribe(response => {
        this.goodsOptions = response;
      });
  }

}
