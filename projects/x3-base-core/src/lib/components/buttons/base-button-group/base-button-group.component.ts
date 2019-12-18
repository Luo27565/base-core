import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseButtonModel } from './models/base-button.model';
import { BaseButtonEnum } from './enums/base-button.enum';

@Component({
  selector: 'core-base-button-group',
  templateUrl: './base-button-group.component.html',
  styleUrls: ['./base-button-group.component.scss'],
})
export class BaseButtonGroupComponent implements OnInit {

  @Input()
  public buttons: BaseButtonModel[];

  @Output()
  public buttonPress: EventEmitter<BaseButtonModel> = new EventEmitter();

  // 蓝色的按钮
  public blue: BaseButtonEnum = BaseButtonEnum.blue;

  public skyBlue: BaseButtonEnum = BaseButtonEnum.skyBlue;

  // 红色的按钮
  public red: BaseButtonEnum = BaseButtonEnum.red;

  constructor() {
  }

  ngOnInit() {
  }

  onPress(model: BaseButtonModel) {
    this.buttonPress.emit(model);
  }

}
