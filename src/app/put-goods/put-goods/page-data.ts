import { ShippingDate } from './../../common/goods-options/shipping-date';
import { SrcRegion } from './../../common/goods-options/src-region';
import { FeeResponsibility } from './../../common/goods-options/fee-responsibility';
import { UseStatus } from './../../common/goods-options/use-status';
import { Category } from './../../common/header/category';
/**
 * 商品出品ページのリストボックスに表示するデータ。
 */
export class PageData {

  // 商品のカテゴリ。
  public category: Array<Category>;

  // 商品の状態。
  public useStatus: Array<UseStatus>;

  // 配送料負担。
  public feeResponsibility: Array<FeeResponsibility>;

  // 発送元地域。
  public srcRegion: Array<SrcRegion>;

  // 出荷予定日。
  public shippingDate: Array<ShippingDate>;
}
