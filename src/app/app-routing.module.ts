import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'top', loadChildren: './top-page/top-page.module#TopPageModule' },
  { path: 'goods-detail/:id', loadChildren: './goods-detail/goods-detail.module#GoodsDetailModule' },
  // 商品出品ページ
  { path: 'put-goods', loadChildren: './put-goods/put-goods.module#PutGoodsModule' },
  { path: '**', redirectTo: 'top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
