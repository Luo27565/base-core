import {BaseButtonEnum} from '../enums/base-button.enum';

// 按钮的实体类
export class BaseButtonModel {

  // 按钮的编号
  public id?: string;

  // 按钮的名称
  public name?: string;

  // 按钮的主题
  public theme?: BaseButtonEnum;

  // 按钮的disabled属性
  public disabled?: boolean;

  // 构造函数
  constructor(id: string = '', name: string = '', theme = null, disabled = false) {
    this.id = id;
    this.name = name;
    this.theme = theme;
    this.disabled = disabled;
  }

}

