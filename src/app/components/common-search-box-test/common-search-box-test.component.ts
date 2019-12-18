import {Component, OnInit} from '@angular/core';
import {CommonSearchBoxComponentInputModel, CommonSearchBoxComponentOutputModel} from '../../../../projects/x3-base-core/src/lib/components/filter/common-search-box/common-search-box.component';

@Component({
  selector: 'app-common-search-box-test',
  templateUrl: './common-search-box-test.component.html',
  styleUrls: ['./common-search-box-test.component.scss'],
  providers: [
    CommonSearchBoxComponentInputModel
  ]
})
export class CommonSearchBoxTestComponent implements OnInit {

  constructor(public model: CommonSearchBoxComponentInputModel) {
    this.model.value = '';
    this.model.key = 'name';
    this.model.placeholder = '编号/名称';
  }

  ngOnInit() {
  }

  onSearch(model: CommonSearchBoxComponentOutputModel) {
    console.log(model);
  }

}
