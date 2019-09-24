import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterGoodsRoutingModule } from './register-goods-routing.module';
import { RegisterGoodsComponent } from './register-goods/register-goods.component';

@NgModule({
  declarations: [RegisterGoodsComponent],
  imports: [
    CommonModule,
    RegisterGoodsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterGoodsModule { }
