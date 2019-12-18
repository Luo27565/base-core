import { FormRegexp } from '../enums/form-regexp.enum';
// 输入框的类
export class FormFieldInputModel {

  // 是否为必填
  public required: boolean;

  // 允许输入的最大长度
  public maxLength: number;

  // 为空时的提示文本
  public placeholder: string;

  // 是否显示字符串长度提示标签
  public isShowLength: boolean;

  // 是否显示表单验证提示
  public isShowValidator: boolean;

  // 表单验证正则表达式
  public regexp: FormRegexp | RegExp;

  // 表单验证错误提示信息
  public errorMessage: string;


  // 构造函数
  constructor({required = false, maxLength = 500, placeholder = null, isShowLength = false, errorMessage = '', regexp = null, isShowValidator = false }) {
    this.required = required;
    this.maxLength = maxLength;
    this.placeholder = placeholder;
    this.isShowLength = isShowLength;
    this.errorMessage = errorMessage;
    this.regexp = regexp;
    this.isShowValidator = isShowValidator;
  }

}
