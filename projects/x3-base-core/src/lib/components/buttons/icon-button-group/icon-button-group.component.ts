import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconButtonModel } from './models/icon-button.model';

@Component({
  selector: 'core-icon-button-group',
  templateUrl: './icon-button-group.component.html',
  styleUrls: ['./icon-button-group.component.scss'],
})
export class IconButtonGroupComponent implements OnInit {

  @Input()
  public buttons: IconButtonModel[];

  @Output()
  public iconButtonPress: EventEmitter<IconButtonModel> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPress(model: IconButtonModel) {
    this.iconButtonPress.emit(model);
  }

}
