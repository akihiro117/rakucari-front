/**
 * カテゴリーを扱うクラス。
 */

export class Category {
  public name: string;
  public url: string;

  /** サブカテゴリー。
   *  サブカテゴリーがある場合は、ここにサブカテゴリーが入る。
   *  サブカテゴリーがない場合はnullになる。
   */
  public subCategories?: Category;
}
