import {Component, OnInit} from '@angular/core';
import {BaseHeaderComponentInputModel} from '../../../../projects/x3-base-core/src/lib/components/headers/base-header/base-header.component';
import {BaseButtonEnum} from '../../../../projects/x3-base-core/src/lib/components/buttons/base-button-group/enums/base-button.enum';
import {BaseButtonModel} from '../../../../projects/x3-base-core/src/lib/components/buttons/base-button-group/models/base-button.model';

@Component({
  selector: 'app-base-header-test',
  templateUrl: './base-header-test.component.html',
  styleUrls: ['./base-header-test.component.scss'],
  providers: [
    BaseHeaderComponentInputModel
  ]
})
export class BaseHeaderTestComponent implements OnInit {

  constructor(public model: BaseHeaderComponentInputModel) {
    this.model.title = '单据中心';
    this.model.buttons = [
      {
        id: 'close',
        name: '关闭',
        theme: BaseButtonEnum.skyBlue
      }
    ];
    this.model.showMenu = true;
  }

  ngOnInit() {
  }

  onHeaderActionPress(model: BaseButtonModel) {
    console.log(model);
  }

}
