export class MainCardTextareaInputModel {

  // 文本框的名字
  public name: string;

  // 文本框的值
  public value: string;

  // 为空时的提示文本
  public placeholder: string;

  // 构造函数
  constructor({placeholder = null, value = '', name = ''}) {
    this.value = value;
    this.placeholder = placeholder;
    this.name = name;
  }
}
