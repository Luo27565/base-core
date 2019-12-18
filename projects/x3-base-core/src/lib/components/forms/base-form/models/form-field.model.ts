import { FormFieldEnum } from '../enums/form-field.enum';

// 表单
export class FormFieldModel<T> {

  // 对应数据库的主键
  public id: string;

  // 名称
  public name: string;

  // 表单类型
  public component: FormFieldEnum;

  // 需要的数据
  public data: T;

  // 构造函数
  constructor(id: string, name: string, component: FormFieldEnum, data: T) {
    this.id = id;
    this.name = name;
    this.component = component;
    this.data = data;
  }

}
