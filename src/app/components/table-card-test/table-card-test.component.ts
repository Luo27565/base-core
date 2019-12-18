import {Component, OnInit} from '@angular/core';
import {TableCardComponentInputModel} from '../../../../projects/x3-base-core/src/lib/components/cards/table-card/table-card.component';
import {TableServiceModel} from '../../../../projects/x3-base-core/src/lib/components/tables/base-table-service/models/table-service.model';
import {TableColumnModel} from '../../../../projects/x3-base-core/src/lib/components/tables/base-table/models/table-column.model';
import {TableColumnAlignEnum} from '../../../../projects/x3-base-core/src/lib/components/tables/base-table/enums/table-column-align.enum';
import {TableColumnEnum} from '../../../../projects/x3-base-core/src/lib/components/tables/base-table/enums/table-column.enum';
import {TableActionColumnComponentInputModel} from '../../../../projects/x3-base-core/src/lib/components/table-columns/table-action-column/table-action-column.component';

@Component({
  selector: 'app-table-card-test',
  templateUrl: './table-card-test.component.html',
  styleUrls: ['./table-card-test.component.scss'],
  providers: [
    TableCardComponentInputModel
  ]
})
export class TableCardTestComponent implements OnInit {

  constructor(public tableModel: TableCardComponentInputModel) {
    this.tableModel.card = {
      title: '明细信息',
      buttons: []
    };
    this.tableModel.filter = {
      commonSelectBox: {
        key: 'status',
        label: '状态',
        options: [
          {
            key: '1',
            value: '启用'
          },
          {
            key: '2',
            value: '停用'
          }
        ],
        value: '1'
      },
      commonSearchBox: {
        key: 'search',
        placeholder: '编号/名称',
        value: ''
      }
    };
    this.tableModel.table = {
      table: {
        key: 'id',
        columns: [
          new TableColumnModel('img', '图片', { component: TableColumnEnum.image, width: '100px' }),
          new TableColumnModel('id', '编号', {width: '100px'}),
          new TableColumnModel('name', '名称', {width: '200px'}),
          new TableColumnModel('description', '描述', {}),
          new TableColumnModel('actions', '操作', {
            width: '150px',
            align: TableColumnAlignEnum.center,
            component: TableColumnEnum.action
          }).setData(new TableActionColumnComponentInputModel([
            {
              id: 'edit',
              name: '编辑'
            },
            {
              id: 'delete',
              name: '删除'
            }
          ])),
        ],
        dataSource: [
          {
            id: '1001',
            name: '测试测试',
            description: '备注备注备注',
            img: 'http://183.62.43.106:9810/images/zhihuan/Attachment/201909/5f26b705-5383-4b0f-ba2d-07ebc358bb88.jpg'
          },
          {
            id: '1002',
            name: '测试测试',
            description: '备注备注备注',
            img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=421936109,3386329021&fm=58&s=8A73CE16DDA56C11564F48D6020030B2&bpow=121&bpoh=75'
          },
          {
            id: '1003',
            name: '测试测试',
            description: '备注备注备注',
            img: 'http://www.x2erp.com/assets/base/img/layout/logos/logo-3.png'
          },
          {
            id: '1004',
            name: '测试测试',
            description: '备注备注备注',
            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=276693978,4097012019&fm=27&gp=0.jpg'
          },
          {
            id: '1005',
            name: '测试测试',
            description: '备注备注备注',
            img: 'http://183.62.43.106:9810/images/zhihuan/Attachment/201909/e5888f9d-989e-49d0-8e9a-5debc2c329f4.jpg'
          },
          {
            id: '1006',
            name: '测试测试',
            description: '备注备注备注',
            img: 'http://baidu.com'
          },
          {
            id: '1007',
            name: '测试测试',
            description: '备注备注备注',
            img: null
          },
          {
            id: '1008',
            name: '测试测试',
            description: '备注备注备注',
            img: ''
          },
          {
            id: '1009',
            name: '测试测试',
            description: '备注备注备注',
          },
          {
            id: '1010',
            name: '测试测试',
            description: '备注备注备注',
          }
        ],
      },
      handler: undefined,
      service: new TableServiceModel('', {autoLoad: false})
    };
  }

  ngOnInit() {
  }

}
