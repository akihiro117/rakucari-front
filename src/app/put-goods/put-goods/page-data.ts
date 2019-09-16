import { Category } from './../../common/header/category';
/**
 * 商品出品ページのリストボックスに表示するデータ。
 */
export class PageData {

  // 商品のカテゴリ。
  public category: Array<string>;

  // 商品の状態。
  public useStatus: Array<string>;

  // 配送料負担。
  public responsibility: Array<string>;

  // 発送元地域。
  public srcRegion: Array<string>;

  // 出荷予定日。
  public shippingDate: Array<string>;
}
