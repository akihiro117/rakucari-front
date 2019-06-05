import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchWords: string;

  // 'カテゴリーから探す'にhoverしたかどうか
  public categoryHover = false;

  // サブカテゴリーにhoverしたかどうか
  public subCategoryHover = false;

  // 中項目を表示する大項目のindex
  // public displayedCategoryIndex: number = null;
  public displayedSubCategories: Array<any> = null;

  // ダミーのカテゴリー
  // TODO: あとで消す
  public categories = [
    {
      name: 'テスト1',
      url: 'http://localhost:8080/test1',
      subCategories: [
        {
          name: 'サブ1'
        },
        {
          name: 'サブ2'
        }
      ]
    },
    {
      name: 'テスト2',
      url: 'http://localhost:8080/test1',
      subCategories: [
        {
          name: 'さぶ2'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.fetchCategories();
  }

  // TODO: あとで実装する。
  /**
   * APIから商品カテゴリーのリストを取得する。
   */
  public fetchCategories(): any {

  }

  // TODO: あとで実装する。
  /**
   * APIから検索条件に類似する商品を取得する。
   */
  public searchItems(): any {

  }

  // 'カテゴリーから探す'にマウスが入った時に
  // hoverフラグをtrueにして、サブカテゴリーのリストを表示する。
  public changeCategoryHover(hoverFlug: boolean): void {
    this.categoryHover = hoverFlug;
  }

  // 大項目のカテゴリーのリストにマウスが入った時に、
  // hoverフラグをtrueにして、サブカテゴリーのリストを表示する。
  public changeSubCategoryHover(hoverFlug: boolean): void {
    this.subCategoryHover = hoverFlug;
  }

  // /**
  //  * 中項目を表示する大項目のindexを設定する
  //  * @param index 中項目を表示する大項目のindex
  //  */
  // public changeDisplayedCategoryIndex(index: number): void {
  //   this.displayedCategoryIndex = index;
  // }
  public changeDisplayedSubCategories(categories: any): void {
    this.displayedSubCategories = categories;
  }


  // TODO: あとで実装する。
  /**
   * 新規会員登録画面に遷移する。
   */
  public toMemberRegistrationForm() {

  }

  // TODO: あとで実装する。
  /**
   * ログイン画面に遷移する。
   */
  public toLoginForm() {

  }

}
