import { Component, Input, OnInit } from '@angular/core';
import { BaseCardComponentInputModel } from '../base-card/base-card.component';
import { IconButtonModel } from '../../buttons/icon-button-group/models/icon-button.model';

export class HintCardComponentInputModel {

  // 明细信息 标题
  public card: BaseCardComponentInputModel;

  // 内容部分
  public contents: string[];

  // 是否显示hint-card
  public hidden: boolean = false;

}

@Component({
  selector: 'core-hint-card',
  templateUrl: './hint-card.component.html',
  styleUrls: ['./hint-card.component.scss']
})
export class HintCardComponent implements OnInit {

  @Input()
  public model: HintCardComponentInputModel;

  constructor() {
  }

  ngOnInit() {
    const buttons = {
      id: '-1',
      icon: 'close',
      name: 'close'
    };
    if (this.model && this.model.card) {
      this.model.card.buttons.push(buttons);
    }
  }

  onBaseCardIconButtonPress(model: IconButtonModel) {
    switch (model.id) {
      case '-1':
        this.model.hidden = true;
        break;
    }
  }

}
