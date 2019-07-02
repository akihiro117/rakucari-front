import { Category } from './category';

/**
 * カテゴリーのAPIからのレスポンスを扱うクラス。
 */

export class CategoryResponse {
  // カテゴリーのリスト。
  public majorCategories: Array<Category>;
}
