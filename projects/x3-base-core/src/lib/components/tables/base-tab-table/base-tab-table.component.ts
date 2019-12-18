import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterContentInit } from '@angular/core';
import {
  BaseTableComponentActionOutputModel,
  BaseTableComponentRowOutputModel
} from '../base-table/base-table.component';
import {
  BaseTableServiceComponent,
  BaseTableServiceComponentInputModel
} from '../base-table-service/base-table-service.component';
import {
  CommonSearchBoxComponentInputModel,
  CommonSearchBoxComponentOutputModel
} from '../../filter/common-search-box/common-search-box.component';

// 输入参数
export class BaseTabTableComponentInputModel {

  // 模糊搜索框
  commonSearchBox?: CommonSearchBoxComponentInputModel;

  // 表格
  table: BaseTableServiceComponentInputModel;

}

@Component({
  selector: 'core-base-tab-table',
  templateUrl: './base-tab-table.component.html',
  styleUrls: ['./base-tab-table.component.scss']
})
export class BaseTabTableComponent implements OnInit, AfterContentInit {

  @ViewChild('ServiceTable', {static: true})
  public table: BaseTableServiceComponent;

  @Input()
  public model: BaseTabTableComponentInputModel;

  @Output()
  public tableRowPress: EventEmitter<BaseTableComponentRowOutputModel> = new EventEmitter();

  @Output()
  public tableActionPress: EventEmitter<BaseTableComponentActionOutputModel> = new EventEmitter();

  @Output()
  public tableRowSelect: EventEmitter<BaseTableComponentRowOutputModel[]> = new EventEmitter();

  @Output()
  public throwTableServiceEvent: EventEmitter<BaseTableServiceComponent> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    this.getSearchParam();
  }

  ngAfterContentInit(): void {
    this.throwTableServiceEvent.emit(this.table);
  }

  getSearchParam() {
    let params = {};
    params = Object.assign(params, {[this.model.commonSearchBox.key]: this.model.commonSearchBox.value});
    this.model.table.service.params = Object.assign(this.model.table.service.params, params);
  }

  onSearchChange(model: CommonSearchBoxComponentOutputModel) {
    let params = {};
    params = Object.assign(params, {[this.model.commonSearchBox.key]: model.value});
    this.model.table.service.params = Object.assign(this.model.table.service.params, params);
    this.table.loadData();
  }
}
