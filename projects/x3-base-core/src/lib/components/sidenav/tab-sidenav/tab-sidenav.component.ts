import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TabSidenavModel} from './models/tab-sidenav.model';
import {TabSidenavEnum} from './enums/tab-sidenav.enum';
import {FormGroup} from '@angular/forms';
import {BaseButtonModel} from '../../buttons/base-button-group/models/base-button.model';
import {
  BaseTableComponentActionOutputModel,
  BaseTableComponentRowOutputModel
} from '../../tables/base-table/base-table.component';
import { BaseTableServiceComponent } from '../../tables/base-table-service/base-table-service.component';


// 输入参数 可能有多个Tab选项卡 所以这里是数组 一个对象对应一个选项卡
export class TabSidenavComponentInputModel {
  // 数据
  public data: TabSidenavModel<any>[];

  // Tab选项卡的宽度
  public width?: string = '500px';
}

// 输出参数
export class TabSidenavComponentOutputModel {
  // 判断是新增还是编辑
  public type: string;

  // 原始值
  public data: { [key: string]: string };

  // 点击按钮
  public action: BaseButtonModel;
}

@Component({
  selector: 'core-tab-sidenav',
  templateUrl: './tab-sidenav.component.html',
  styleUrls: ['./tab-sidenav.component.scss'],
  providers: [TabSidenavComponentOutputModel]
})
export class TabSidenavComponent implements OnInit {
  @ViewChild('baseSideNav', {static: true})
  baseSideNav;

  @Input()
  public model: TabSidenavComponentInputModel;

  @Output()
  public tabNavButtonPress: EventEmitter<TabSidenavComponentOutputModel> = new EventEmitter();

  @Output()
  public tableRowSelect: EventEmitter<BaseTableComponentRowOutputModel[]> = new EventEmitter();

  @Output()
  public tableActionPress: EventEmitter<BaseTableComponentActionOutputModel> = new EventEmitter();

  @Output()
  public tableRowPress: EventEmitter<BaseTableComponentRowOutputModel> = new EventEmitter();

  @Output()
  public throwTableServiceEvent: EventEmitter<BaseTableServiceComponent> = new EventEmitter();

  // 表单类型的Tab
  public formNav: TabSidenavEnum = TabSidenavEnum.form;

  public tabForm: TabSidenavEnum = TabSidenavEnum.tabForm;

  // 提示信息的Tab
  public hintsNav: TabSidenavEnum = TabSidenavEnum.hints;

  // 主单信息的Tab
  public mainNav: TabSidenavEnum = TabSidenavEnum.main;

  // 表格类型的Tab
  public tableNav: TabSidenavEnum = TabSidenavEnum.table;

  // 所有Tab选项卡中是form类型的数据
  public formGroups: { [key: string]: FormGroup } = {};

  // 构造函数
  constructor(private output: TabSidenavComponentOutputModel) {
  }

  ngOnInit(): void {
  }

  // id: 对应TabSidenavModel的编号id
  onLoadFormData(id, form) {
    this.formGroups[id] = form;
  }

  // 获取表单数据 非表单数据不能用此方法获取数据 返回的是FormGroup对象
  getFormData(id: string): FormGroup {
    if (this.formGroups[id] != null) {
      return this.formGroups[id];
    } else {
      console.log('Tab栏编号不存在');
      return new FormGroup({});
    }
  }

  // 设置表单数据为只读
  setFormDisable(id: string, data: string[]) {
    if (this.formGroups[id] != null) {
      const form: FormGroup = this.formGroups[id];
      data.forEach(item => {
        if (form.controls[item] != null) {
          form.controls[item].disable();
        }
      });
    } else {
      console.log('Tab栏编号不存在');
    }
  }

  // 设置表单数据为读写
  setFormEnable(id: string, data: string[]) {
    if (this.formGroups[id] != null) {
      const form: FormGroup = this.formGroups[id];
      data.forEach(item => {
        if (form.controls[item] != null) {
          form.controls[item].enable();
        }
      });
    } else {
      console.log('Tab栏编号不存在');
    }
  }

  // 设置表单数据
  setFormData(id: string, data: { [key: string]: string } = {}) {
    this.output.data = data;
    if (this.formGroups[id] != null) {
      const keys: string[] = Object.keys(data);
      keys.forEach(item => {
        if (data[item] !== null && data[item] !== undefined) {
          data[item] = data[item].toString();
        }
      });
      const form: FormGroup = this.formGroups[id];
      form.patchValue(data);
    } else {
      console.log('Tab栏编号不存在');
    }
  }

  // 重置表单数据
  resetFormData(id: string) {
    if (this.formGroups[id] != null) {
      const form: FormGroup = this.formGroups[id];
      form.reset();
    } else {
      console.log('Tab栏编号不存在');
    }
  }

  // 选项卡底部按钮的点击事件
  onBaseButtonPress(data: BaseButtonModel) {
    this.output.action = data;
    this.tabNavButtonPress.emit(this.output);
  }

  open(type) {
    this.output.type = type;
    this.baseSideNav.open();
  }

  close() {
    this.baseSideNav.close();
  }

  onTableRowSelect(data: BaseTableComponentRowOutputModel[]) {
    this.tableRowSelect.emit(data);
  }

  onTableActionPress(data: BaseTableComponentActionOutputModel) {
    this.tableActionPress.emit(data);
  }

  onTableRowPress(data: BaseTableComponentRowOutputModel) {
    this.tableRowPress.emit(data);
  }
}
