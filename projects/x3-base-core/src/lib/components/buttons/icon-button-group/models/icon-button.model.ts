export class IconButtonModel {

  // 编号
  public id?: string;

  // 名称
  public name?: string;

  // 图标
  public icon?: string;

  // 构造函数
  constructor(id: string = '', name: string = '', icon: string = '') {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}


