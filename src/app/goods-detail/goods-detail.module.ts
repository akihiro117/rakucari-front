import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsDetailRoutingModule } from './goods-detail-routing.module';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';

@NgModule({
  declarations: [GoodsDetailComponent],
  imports: [
    CommonModule,
    GoodsDetailRoutingModule
  ]
})
export class GoodsDetailModule { }
