/**
 * 商品情報を扱うクラス。
 */
export class Goods {
  /** 商品名。 */
  public goodsName: string;

  /** 商品の画像のURL。 */
  public imgUrl: string;

  /** カテゴリー。 */
  public majorCategory: string;

  /** 商品の状態。 */
  public useStatus: string;

  /** 配送料の負担。 */
  public feeResponsibility: string;

  /** 配送元地域。 */
  public srcRegion: string;

  /** 発送日の目安。 */
  public shippingDate: string;

  /** 価格。 */
  public price: number;

  /** 商品説明。 */
  public description: string;
}
