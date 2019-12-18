import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseTableComponentActionOutputModel, BaseTableComponentInputModel, BaseTableComponentRowOutputModel} from '../base-table/base-table.component';
import {TableServiceModel} from './models/table-service.model';
import {TableServiceEnum} from './enums/table-service.enum';

export interface HandlerData {
  // tslint:disable-next-line: callable-types
  (data: any[]): any[];
}

// 输入参数
export class BaseTableServiceComponentInputModel {
  // 表格的配置
  public table: BaseTableComponentInputModel = new BaseTableComponentInputModel();

  // 服务的配置
  public service: TableServiceModel = new TableServiceModel('', {});

  // 数据的转换
  public handler: HandlerData;
}

@Component({
  selector: 'core-base-table-service',
  templateUrl: './base-table-service.component.html',
  styleUrls: ['./base-table-service.component.scss']
})
export class BaseTableServiceComponent implements OnInit {
  @Input()
  public model: BaseTableServiceComponentInputModel;

  @Output()
  public tableActionPress = new EventEmitter<BaseTableComponentActionOutputModel>();

  @Output()
  public tableRowPress = new EventEmitter<BaseTableComponentRowOutputModel>();

  @Output()
  public tableRowSelect: EventEmitter<BaseTableComponentRowOutputModel[]> = new EventEmitter();

  // 参数
  private params: { [key: string]: any } = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    if (this.model.service.autoLoad === true) {
      this.loadData();
    }
  }

  // 加载数据
  loadData() {
    // 是否需要分页
    const isPagination = this.model.service.isPagination;
    // 查询的参数
    this.params = isPagination ? Object.assign(this.model.service.paginationParams, this.model.service.params) : this.params;

    // 查询 获取数据
    switch (this.model.service.method) {
      case TableServiceEnum.GET:
        this.getData();
        break;
      case TableServiceEnum.POST:
        this.postData();
        break;
      default:
        this.postData();
        break;
    }
  }

  // GET获取数据
  private getData() {
    this.http.get(this.model.service.name, {params: this.params}).subscribe((result: any) => {
      if (this.model.handler) {
        result = this.model.handler(result);
      }

      this.model.table.dataSource = result ? result : [];
    });
  }

  // POST获取数据
  private postData() {
    this.http.post(this.model.service.name, this.params).subscribe((result: any) => {
      let data: any[] = result.data;
      if (this.model.handler) {
        data = this.model.handler(data);
      }

      this.model.table.dataSource = data ? data : [];
    });
  }

  // 滚动条触底事件
  onScrollEvent() {
  }
}
