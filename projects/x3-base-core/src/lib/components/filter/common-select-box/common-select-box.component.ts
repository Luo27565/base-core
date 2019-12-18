import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonFieldModel} from '../../forms/base-form/models/common-field.model';
import {MatSelectChange} from '@angular/material/typings/select';

// 输入参数
export class CommonSelectBoxComponentInputModel {

  // 数据的key值
  public key: string;

  // 左边的文件提示
  public label: string;

  // 下拉框的数据源
  public options: CommonFieldModel[];

  // 下拉框的默认选中的值
  public value: string;

}

// 输出参数
export class CommonSelectBoxComponentOutputModel {

  public data: CommonFieldModel;

}

@Component({
  selector: 'core-common-select-box',
  templateUrl: './common-select-box.component.html',
  styleUrls: ['./common-select-box.component.scss'],
  providers: [
    CommonSelectBoxComponentOutputModel
  ]
})
export class CommonSelectBoxComponent implements OnInit {

  @Input()
  public model: CommonSelectBoxComponentInputModel;

  @Output()
  public output: EventEmitter<CommonSelectBoxComponentOutputModel> = new EventEmitter<CommonSelectBoxComponentOutputModel>();

  constructor(public outputModal: CommonSelectBoxComponentOutputModel) {
  }

  ngOnInit() {
  }

  onSelectionChange(model: MatSelectChange) {
    this.outputModal.data = new CommonFieldModel(model.value, 'value 值未在 CommonSelectBoxComponent 中定义');
    this.output.emit(this.outputModal);
  }

}
