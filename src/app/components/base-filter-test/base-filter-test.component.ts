import {Component, OnInit} from '@angular/core';
import {BaseFilterComponentInputModel} from '../../../../projects/x3-base-core/src/lib/components/filter/base-filter/base-filter.component';

@Component({
  selector: 'app-base-filter-test',
  templateUrl: './base-filter-test.component.html',
  styleUrls: ['./base-filter-test.component.scss'],
  providers: [
    BaseFilterComponentInputModel
  ]
})
export class BaseFilterTestComponent implements OnInit {

  constructor(public formModel: BaseFilterComponentInputModel) {
    this.formModel.commonSearchBox = {
      key: 'name',
      placeholder: '编号/名称',
      value: ''
    };
    this.formModel.commonSelectBox = {
      key: 'status',
      label: '状态',
      options: [
        {key: '1', value: '启用'},
        {key: '2', value: '停用'}
      ],
      value: ''
    };
  }

  ngOnInit() {
  }

}
