import {TableColumnAlignEnum} from '../enums/table-column-align.enum';
import {TableColumnEnum} from '../enums/table-column.enum';
import {TableActionColumnComponentInputModel} from '../../../table-columns/table-action-column/table-action-column.component';
import {TableImgColumnComponentInputModel} from '../../../table-columns/table-img-column/table-img-column.component';
import {TableColumnWidthEnum} from '../enums/table-column-width.enum';

// 表格列对象
export class TableColumnModel {

  // key值 对应数据库中的值
  public key: string;

  // 表头显示的名称
  public name: string;

  // 该列的文本对齐方式
  public align: TableColumnAlignEnum;

  // 该列的宽度
  public width: string | TableColumnWidthEnum;

  // 是否根据此列进行排序
  public sort: boolean;

  // 组件名
  public component: TableColumnEnum;

  // 这一列的颜色
  public color: string;

  // 数据源
  public data: any = '';

  // 构造函数
  constructor(key: string, name: string, {component = TableColumnEnum.text, align = TableColumnAlignEnum.left, width = 'auto', sort = false, color = '#333', data = key}) {
    this.key = key;
    this.name = name;
    this.align = align;
    this.width = width;
    this.sort = sort;
    this.color = color;
    this.component = component;
    this.data = data;
  }

  // 设置组件对应的数据取值
  setData(data: TableActionColumnComponentInputModel | TableImgColumnComponentInputModel | string) {
    this.data = data;
    return this;
  }

}
