import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconButtonModel } from '../../buttons/icon-button-group/models/icon-button.model';

// 输入参数
export class BaseCardComponentInputModel {

  // 左边的标题
  public title: string = '';

  // 右边的图标数组
  public buttons: IconButtonModel[];

}

@Component({
  selector: 'core-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {

  @Input()
  public model: BaseCardComponentInputModel;

  @Output()
  public iconButtonPress: EventEmitter<IconButtonModel> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onIconButtonPress(model: IconButtonModel) {
    this.iconButtonPress.emit(model);
  }
}
