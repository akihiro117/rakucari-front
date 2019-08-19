import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { Router } from '@angular/router';

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

  // 画面に表示するサブカテゴリーのリスト。 
  public subCategories: Array<any> = null;

  // カテゴリーのリスト。
  public categories: Array<Category>;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchCategories();
  }

  /**
   * APIから商品カテゴリーのリストを取得する。
   */
  public fetchCategories(): any {
    this.categoryService.fetchCategories().subscribe(response => this.categories = response);
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

  /**
   * 画面に表示するサブカテゴリーを設定する。
   * htmlではhoverしたカテゴリーのサブカテゴリーを引数に設定するようにし、
   * 「カテゴリーを探す」からhoverをはずすとnullを設定するようにする。
   * 
   * @param 設定するサブカテゴリー。
   */
  public changeSubCategories(subCategories: any): void {
    this.subCategories = subCategories;
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

  /**
   * topページに遷移する。
   */
  public moveToTop() {
    this.router.navigate(['/top']);
  }

}
