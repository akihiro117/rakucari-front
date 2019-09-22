/**
 * カテゴリーを扱うクラス。
 */

export class Category {
  /** カテゴリーID */
  public id: string;

  /** カテゴリー名 */
  public name: string;

  /** カテゴリーのページのURL */
  public url: string;

  /** サブカテゴリー。
   *  サブカテゴリーがある場合は、ここにサブカテゴリーが入る。
   *  サブカテゴリーがない場合はnullになる。
   */
  public subCategories?: Array<Category>;
}
