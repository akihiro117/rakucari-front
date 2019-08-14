import { Goods } from './goods';

/**
 * カテゴリーごとに最近追加された商品のリストを保持するクラス。
 */

export class GoodsListPerCategory {
  /** カテゴリー名。 */
  public categoryName: string;

  /** 最近追加された商品。 */
  public recentGoodsList: Array<Goods>;
}
