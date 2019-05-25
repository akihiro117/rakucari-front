import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchWords: string;

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
