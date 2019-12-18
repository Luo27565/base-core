import {Component, OnInit} from '@angular/core';
import {CommonSelectBoxComponentInputModel} from '../../../../projects/x3-base-core/src/lib/components/filter/common-select-box/common-select-box.component';

@Component({
  selector: 'app-common-select-box-test',
  templateUrl: './common-select-box-test.component.html',
  styleUrls: ['./common-select-box-test.component.scss'],
  providers: [
    CommonSelectBoxComponentInputModel
  ]
})
export class CommonSelectBoxTestComponent implements OnInit {

  constructor(public selectModel: CommonSelectBoxComponentInputModel) {
    this.selectModel.key = 'status';
    this.selectModel.label = '状态';
    this.selectModel.options = [
      {
        key: '1',
        value: '启用',
      },
      {
        key: '0',
        value: '停用',
      }
    ];
  }

  ngOnInit() {
  }

}
