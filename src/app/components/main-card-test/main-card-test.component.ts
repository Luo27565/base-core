import { Component, OnInit } from '@angular/core';
import { MainCardComponentInputModel } from '../../../../projects/x3-base-core/src/lib/components/cards/main-card/main-card.component';
import { MainCardEnum } from '../../../../projects/x3-base-core/src/lib/components/cards/main-card/enums/main-card.enum';
import { MainCardModel } from '../../../../projects/x3-base-core/src/lib/components/cards/main-card/models/main-card.model';
@Component({
  selector: 'app-main-card-test',
  templateUrl: './main-card-test.component.html',
  styleUrls: ['./main-card-test.component.scss'],
  providers: [MainCardComponentInputModel]
})
export class MainCardTestComponent implements OnInit {
  public makeCardModel: MainCardComponentInputModel = {
    card: {
      title: '制单信息',
      buttons: []
    },
    cols: 4,
    data: {
      a: 'Alex',
      b: 'Alex',
      c: 'Alex',
      d: 'Alex',
      e: '2019-10-10',
      f: '2019-10-11',
      g: '2019-10-12',
      h: '2019-10-13'
    },
    fields: [
      new MainCardModel<any>('a', '制单人', MainCardEnum.text, 'a'),
      new MainCardModel<any>('b', '提交人', MainCardEnum.text, 'b'),
      new MainCardModel<any>('c', '审批人', MainCardEnum.text, 'c'),
      new MainCardModel<any>('d', '驳回人', MainCardEnum.text, 'd'),
      new MainCardModel<any>('e', '制单日期', MainCardEnum.text, 'e'),
      new MainCardModel<any>('f', '提交日期', MainCardEnum.text, 'f'),
      new MainCardModel<any>('g', '审批日期', MainCardEnum.text, 'g'),
      new MainCardModel<any>('h', '驳回日期', MainCardEnum.text, 'h')
    ],
    input: undefined
  };

  constructor(public mainCardModel: MainCardComponentInputModel) {
    this.mainCardModel.card = {
      title: '尺码组信息',
      buttons: []
    };

    this.mainCardModel.cols = 1;

    this.mainCardModel.data = {
      id: '1000001',
      name: '上衣尺码组',
      description: '备注信息信息..........'
    };

    this.mainCardModel.fields = [
      new MainCardModel<any>('id', '编号', MainCardEnum.text, 'id'),
      new MainCardModel<any>('name', '名称', MainCardEnum.text, 'name'),
      new MainCardModel<any>('description', '备注', MainCardEnum.text, 'description')
    ];

    this.mainCardModel.input = undefined;
  }

  ngOnInit() {}
}
