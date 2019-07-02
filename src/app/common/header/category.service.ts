import { CategoryResponse } from './category-response';
/**
 * カテゴリーに関する処理を提供するservice。
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  /**
   * APIから商品カテゴリーのリストをJSON形式で取得し、
   * カテゴリーのリストを返す。
   */
  public fetchCategories(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/category')
      .pipe(map(resJson => {
        const categoryRes = resJson as CategoryResponse;
        return categoryRes.majorCategories;
      }));
  }
}
