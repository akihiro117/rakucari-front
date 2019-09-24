import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGoodsComponent } from './register-goods.component';

describe('RegisterGoodsComponent', () => {
  let component: RegisterGoodsComponent;
  let fixture: ComponentFixture<RegisterGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterGoodsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
