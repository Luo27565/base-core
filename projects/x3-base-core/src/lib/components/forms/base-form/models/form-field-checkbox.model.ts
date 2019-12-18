import {CommonFieldModel} from './common-field.model';

// 复选框的类
export class FormFieldCheckboxModel {

  // 是否为必填
  public required: boolean;

  // 选择label的位置
  public labelPosition: string;

  // 数据源
  public data: CommonFieldModel[];

  // 构造函数
  constructor(data: CommonFieldModel[], {required = false, labelPosition = 'after'}) {
    this.required = required;
    this.labelPosition = labelPosition;
    this.data = data;
  }
}
