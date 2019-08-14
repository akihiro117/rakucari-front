import { GoodsListPerCategory } from './goods-list-per-category';

/**
 * APIから取得した最近追加された商品情報を格納するクラス。
 */
export class RecentGoodsResponse {

  /** カテゴリーごとの最近追加された商品。 */
  public recentGoodsList: Array<GoodsListPerCategory>;
}
