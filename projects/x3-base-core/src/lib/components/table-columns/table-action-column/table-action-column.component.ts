import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumnActionModel } from './models/table-column-action.model';

// 输入参数
export class TableActionColumnComponentInputModel {

  // 按钮组
  public actions: TableColumnActionModel[];

  // 构造函数
  constructor(actions: TableColumnActionModel[]) {
    this.actions = actions;
  }

}

// 输出参数
export class TableActionColumnComponentOutputModel {

  // 按钮的编号
  public id: string;

  // 按钮的名称
  public name: string;

}

@Component({
  selector: 'core-table-action-column',
  templateUrl: './table-action-column.component.html',
  styleUrls: ['./table-action-column.component.scss'],
  providers: [
    TableActionColumnComponentOutputModel
  ],
})
export class TableActionColumnComponent implements OnInit {

  @Input()
  input: TableActionColumnComponentInputModel;

  @Output()
  output: EventEmitter<TableActionColumnComponentOutputModel> = new EventEmitter();

  constructor(public model: TableActionColumnComponentOutputModel) {
  }

  ngOnInit() {
  }

  onPress(event: Event, action: TableColumnActionModel) {
    event.stopPropagation();
    this.model.id = action.id;
    this.model.name = action.name;
    this.output.emit(this.model);
  }

}
