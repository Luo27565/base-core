import {TabSidenavEnum} from '../enums/tab-sidenav.enum';
import {BaseButtonModel} from '../../../buttons/base-button-group/models/base-button.model';

// Tab选项卡实体类
export class TabSidenavModel<T> {

  // Tab选项卡的编号
  public id: string;

  // Tab选项卡的名称
  public name: string;

  // 组件
  public component: TabSidenavEnum;

  // 组件的数据源
  public data: T;

  // 按钮组
  public buttons: BaseButtonModel[];

  // 构造函数
  constructor(id: string, name, {component = TabSidenavEnum.form}, data: T = null, buttons: BaseButtonModel[] = []) {
    this.id = id;
    this.name = name;
    this.component = component;
    this.data = data;
    this.buttons = buttons;
  }

}

