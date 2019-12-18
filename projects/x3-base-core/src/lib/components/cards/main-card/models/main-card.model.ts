import {MainCardEnum} from '../enums/main-card.enum';

export class MainCardModel<T> {

  // 字段的key值
  public key: string;

  // 字段显示的名称
  public name: string;

  // 此字段要以什么组件来显示
  public component: MainCardEnum;

  // 对应组件的参数
  public data: T;

  constructor(key: string, name: string, component: MainCardEnum, data: T) {
    this.key = key;
    this.name = name;
    this.component = component;
    this.data = data;
  }

}
