import { ShippingDate } from '../../common/goods-options/shipping-date';
import { SrcRegion } from '../../common/goods-options/src-region';
import { FeeResponsibility } from '../../common/goods-options/fee-responsibility';
import { UseStatus } from '../../common/goods-options/use-status';
import { Category } from 'src/app/common/header/category';
import { Goods } from 'src/app/top-page/top-page/goods';

/**
 * ユーザーの入力データを扱うクラス。
 */
export class UserInputData {
  public goods: Goods = new Goods();

  public category: Category = new Category();

  public useStatus: UseStatus = new UseStatus();

  public feeResponsibility: FeeResponsibility = new FeeResponsibility();

  public srcRegion: SrcRegion = new SrcRegion();

  public shippingDate: ShippingDate = new ShippingDate();
}
