import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {BaseTabTableComponentInputModel} from '../../../../projects/x3-base-core/src/lib/components/tables/base-tab-table/base-tab-table.component';
import {TableServiceModel} from '../../../../projects/x3-base-core/src/lib/components/tables/base-table-service/models/table-service.model';
import {
  TabSidenavComponent,
  TabSidenavComponentInputModel
} from '../../../../projects/x3-base-core/src/lib/components/sidenav/tab-sidenav/tab-sidenav.component';
import {TabSidenavModel} from '../../../../projects/x3-base-core/src/lib/components/sidenav/tab-sidenav/models/tab-sidenav.model';
import {TabSidenavEnum} from '../../../../projects/x3-base-core/src/lib/components/sidenav/tab-sidenav/enums/tab-sidenav.enum';
import {TableColumnModel} from '../../../../projects/x3-base-core/src/lib/components/tables/base-table/models/table-column.model';
import {BaseButtonEnum} from '../../../../projects/x3-base-core/src/lib/components/buttons/base-button-group/enums/base-button.enum';
import { BaseTableServiceComponent } from '../../../../projects/x3-base-core/src/lib/components/tables/base-table-service/base-table-service.component';

@Component({
  selector: 'app-base-tab-table-test',
  templateUrl: './base-tab-table-test.component.html',
  styleUrls: ['./base-tab-table-test.component.scss'],
  providers: [TabSidenavComponentInputModel]
})
export class BaseTabTableTestComponent implements OnInit, AfterContentInit {

  @ViewChild('tabSideNav', {static: true})
  tabSideNav: TabSidenavComponent;

  constructor(public input: TabSidenavComponentInputModel) {
    this.input = {
      width: '500px',
      data: [
        new TabSidenavModel<BaseTabTableComponentInputModel>('1001', 'PLUGIN_B0023',
          {component: TabSidenavEnum.table}, {
            commonSearchBox: {value: '', key: 'searchKey', placeholder: '请输入'},
            table: {
              service: new TableServiceModel(`/api/test`, { autoLoad: false }),
              table: {
                key: 'workGroupId',
                columns: [
                  new TableColumnModel('workGroupId', 'PLUGIN_B0011', {width: '30%'}),
                  new TableColumnModel('workGroupName', 'PLUGIN_B0025', {width: '70%'})
                ],
                dataSource: [
                  {workGroupId: '1001', workGroupName: '商品档案维护工作组'},
                  {workGroupId: '1002', workGroupName: '店铺档案维护工作组'},
                  {workGroupId: '1003', workGroupName: '会员档案维护工作组'},
                  {workGroupId: '1004', workGroupName: '尺码档案维护工作组'},
                  {workGroupId: '1005', workGroupName: '颜色档案维护工作组'},
                  {workGroupId: '1006', workGroupName: '供应商档案维护工作组'},
                  {workGroupId: '1007', workGroupName: '商品档案审批工作组'},
                  {workGroupId: '1008', workGroupName: '店铺档案审批工作组'},
                  {workGroupId: '1009', workGroupName: '会员档案审批工作组'},
                  {workGroupId: '1010', workGroupName: '尺码档案审批工作组'},
                  {workGroupId: '1011', workGroupName: '颜色档案审批工作组'},
                  {workGroupId: '1012', workGroupName: '供应商档案审批工作组'}
                ],
                showSelect: true
              },
              handler: null
            },
          }, [{id: '1001', name: 'PLUGIN_B0024', theme: BaseButtonEnum.blue}])
      ]
    };
  }

  ngOnInit() {
  }

  open() {
    this.tabSideNav.open('1');
  }

  ngAfterContentInit(): void {
  }

  onThrowTableServiceEvent(instance: BaseTableServiceComponent) {
    console.log(instance);
  }
}
