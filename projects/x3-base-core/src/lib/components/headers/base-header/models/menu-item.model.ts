/**
 * 标题栏可展开的右侧菜单列表
 */
export class MenuItemModel {

  // 菜单按钮的编号
  public id: string;

  // 菜单按钮的名称
  public name: string;

  // 构造函数
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}
