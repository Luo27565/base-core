import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonSelectBoxComponentInputModel, CommonSelectBoxComponentOutputModel} from '../common-select-box/common-select-box.component';
import {CommonSearchBoxComponentInputModel, CommonSearchBoxComponentOutputModel} from '../common-search-box/common-search-box.component';

// 输入参数
export class BaseFilterComponentInputModel {

  // 下拉框
  commonSelectBox?: CommonSelectBoxComponentInputModel;

  // 模糊搜索框
  commonSearchBox?: CommonSearchBoxComponentInputModel;

}

// 输出参数
export class BaseFilterComponentOutputModel {

  // 下拉框的值
  select: CommonSelectBoxComponentOutputModel;

  // 搜索框的值
  search: CommonSearchBoxComponentOutputModel;

}

@Component({
  selector: 'core-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.scss'],
  providers: [
    BaseFilterComponentOutputModel,
    CommonSearchBoxComponentInputModel
  ]
})
export class BaseFilterComponent implements OnInit {

  @Input()
  public model: BaseFilterComponentInputModel;

  @Output()
  public output: EventEmitter<BaseFilterComponentOutputModel> = new EventEmitter();

  // 构造函数
  constructor(private outputModel: BaseFilterComponentOutputModel) {
  }

  ngOnInit() {
  }

  // 下拉框的改变事件
  onSelectionChange(model: CommonSelectBoxComponentOutputModel) {
    this.outputModel.select = model;
    this.output.emit(this.outputModel);
  }

  // 搜索按钮的点击事件
  onSearchChange(model: CommonSearchBoxComponentOutputModel) {
    this.outputModel.search = model;
    this.output.emit(this.outputModel);
  }

}
