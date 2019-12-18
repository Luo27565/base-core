import {Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterContentInit} from '@angular/core';
import {IconButtonModel} from '../../buttons/icon-button-group/models/icon-button.model';
import {BaseCardComponentInputModel} from '../base-card/base-card.component';
import {BaseTableComponentActionOutputModel, BaseTableComponentRowOutputModel} from '../../tables/base-table/base-table.component';
import {BaseFilterComponentInputModel, BaseFilterComponentOutputModel} from '../../filter/base-filter/base-filter.component';
import {BaseTableServiceComponent, BaseTableServiceComponentInputModel} from '../../tables/base-table-service/base-table-service.component';

// 输入参数
export class TableCardComponentInputModel {

  // 明细信息
  public card: BaseCardComponentInputModel;

  // 筛选项
  public filter: BaseFilterComponentInputModel;

  // 表格的数据
  public table: BaseTableServiceComponentInputModel;

}

@Component({
  selector: 'core-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  providers: [BaseFilterComponentOutputModel]
})
export class TableCardComponent implements OnInit, AfterContentInit {

  @ViewChild('ServiceTable', {static: true})
  public table: BaseTableServiceComponent;

  @Input()
  public model: TableCardComponentInputModel;

  @Output()
  public iconButtonPress: EventEmitter<IconButtonModel> = new EventEmitter();

  @Output()
  public tableRowPress: EventEmitter<BaseTableComponentRowOutputModel> = new EventEmitter();

  @Output()
  public tableActionPress: EventEmitter<BaseTableComponentActionOutputModel> = new EventEmitter();

  @Output()
  public throwTableServiceEvent: EventEmitter<BaseTableServiceComponent> = new EventEmitter();

  constructor() {
  }

  ngAfterContentInit(): void {
    this.throwTableServiceEvent.emit(this.table);
  }

  onBaseCardIconButtonPress(model: IconButtonModel) {
    this.iconButtonPress.emit(model);
  }

  ngOnInit(): void {
    this.getFilterParams();
  }

  // 把筛选项的信息传到service的params中去
  getFilterParams() {
    let params = {};
    if (this.model.filter) {
      if (this.model.filter.commonSelectBox) {
        params = Object.assign(params, {[this.model.filter.commonSelectBox.key]: this.model.filter.commonSelectBox.value});
      }
      if (this.model.filter.commonSearchBox) {
        params = Object.assign(params, {[this.model.filter.commonSearchBox.key]: this.model.filter.commonSearchBox.value});
      }
    }
    this.model.table.service.params = Object.assign(params, this.model.table.service.params);
  }

  // 筛选项的改变事件
  onBaseFilterSearch(model: BaseFilterComponentOutputModel) {
    let params = {};
    if (this.model.filter) {
      if (this.model.filter.commonSelectBox && model.select) {
        params = Object.assign(params, {[this.model.filter.commonSelectBox.key]: model.select.data.key});
      }
      if (this.model.filter.commonSearchBox && model.search) {
        params = Object.assign(params, {[this.model.filter.commonSearchBox.key]: model.search.value});
      }
    }
    this.model.table.service.params = Object.assign(this.model.table.service.params, params);
    this.table.loadData();
  }
}
