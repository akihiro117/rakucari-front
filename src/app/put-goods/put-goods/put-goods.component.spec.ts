import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutGoodsComponent } from './put-goods.component';

describe('PutGoodsComponent', () => {
  let component: PutGoodsComponent;
  let fixture: ComponentFixture<PutGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
