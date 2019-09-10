import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PutGoodsRoutingModule } from './put-goods-routing.module';
import { PutGoodsComponent } from './put-goods/put-goods.component';

@NgModule({
  declarations: [PutGoodsComponent],
  imports: [
    CommonModule,
    PutGoodsRoutingModule
  ]
})
export class PutGoodsModule { }
