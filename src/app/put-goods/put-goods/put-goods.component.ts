import { PutGoodsService } from './put-goods.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/header/category';
import { PageData } from './page-data';

@Component({
  selector: 'app-put-goods',
  templateUrl: './put-goods.component.html',
  styleUrls: ['./put-goods.component.sass']
})
export class PutGoodsComponent implements OnInit {

  public goodsOptions: PageData;

  constructor(
    private putGoodsService: PutGoodsService
  ) { }

  ngOnInit() {
    this.fetchPageData();
  }

  public fetchPageData(): void {
    this.putGoodsService.fetchPageData()
      .subscribe(response => {
        this.goodsOptions = response;
      });
  }

}
