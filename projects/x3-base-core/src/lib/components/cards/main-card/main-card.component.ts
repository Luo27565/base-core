import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseCardComponentInputModel} from '../base-card/base-card.component';
import {MainCardModel} from './models/main-card.model';
import {MainCardEnum} from './enums/main-card.enum';
import {MainCardTextareaInputModel} from './models/main-card-textarea';

// 输入参数
export class MainCardComponentInputModel {

  // 信息的标题
  public card: BaseCardComponentInputModel;

  // 信息的字段描述
  public fields: MainCardModel<any>[];

  // 信息一行显示的条数
  public cols?: number;

  // 信息的文本框
  public input?: MainCardTextareaInputModel;

  // 信息的数据源
  public data: any;

}

@Component({
  selector: 'core-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
  providers: [
    BaseCardComponentInputModel
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainCardComponent implements OnInit {

  // 文本
  public text: MainCardEnum = MainCardEnum.text;

  @Input()
  public model: MainCardComponentInputModel;

  constructor() {
  }

  ngOnInit() {
    if (!this.model.cols) {
      this.model.cols = 2;
    }
  }

}
