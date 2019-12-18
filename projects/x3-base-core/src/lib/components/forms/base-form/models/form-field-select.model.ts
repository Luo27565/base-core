import {CommonFieldModel} from './common-field.model';

// 下拉框的类
export class FormFieldSelectModel {

  // 是否为必填
  public required: boolean;

  // 为空时的提示文本
  public placeholder: string;


  // 数据源
  public data: CommonFieldModel[];

  // 构造函数
  constructor(data: CommonFieldModel[], {required = false, placeholder = null}) {
    this.required = required;
    this.data = data;
    this.placeholder = placeholder;
  }

}
