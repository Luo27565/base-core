// 文本域的类
export class FormFieldTextareaModel {
  // 是否为必填
  public required: boolean;

  // 允许输入的最大长度
  public maxLength: number;

  // 为空时的提示文本
  public placeholder: string;

  // 是否显示字符串长度提示标签
  public isShowLength: boolean;

  // 构造函数
  constructor({ required = false, maxLength = 500, placeholder = null, isShowLength = false }) {
    this.required = required;
    this.maxLength = maxLength;
    this.placeholder = placeholder;
    this.isShowLength = isShowLength;
  }
}
