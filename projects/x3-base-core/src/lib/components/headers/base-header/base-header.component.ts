import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseButtonModel} from '../../buttons/base-button-group/models/base-button.model';
import {MenuItemModel} from './models/menu-item.model';
import {FullScreenService} from '../../../services/full-screen.service';
import {BaseButtonEnum} from '../../buttons/base-button-group/enums/base-button.enum';

// 输入参数
export class BaseHeaderComponentInputModel {

  // 标题
  public title: string = '页面标题';

  // 按钮组
  public buttons: BaseButtonModel[];

  // 是否显示关闭按钮
  public showClose?: boolean;

  // 是否显示更多的按钮
  public showMenu?: boolean;

  // 菜单按钮
  public menus?: MenuItemModel[];

}

@Component({
  selector: 'core-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss']
})
export class BaseHeaderComponent implements OnInit {

  @Input()
  public model: BaseHeaderComponentInputModel;

  @Output()
  public buttonPress: EventEmitter<BaseButtonModel> = new EventEmitter();

  // 关闭按钮的按钮组
  public closeButtonGroups: BaseButtonModel[] = [
    {
      id: 'close',
      name: 'CORE_A0001',
      theme: BaseButtonEnum.skyBlue
    }
  ];

  constructor(public fullScreenService: FullScreenService) {
  }

  ngOnInit() {
  }

  // 按钮的点击事件
  onBaseButtonPress(model: BaseButtonModel) {
    this.buttonPress.emit(model);
  }

  // 全屏的点击事件'
  onFullScreenPress() {
    this.fullScreenService.full = !this.fullScreenService.full;
  }

  // 关闭按钮的点击事件
  closeWindow(model: BaseButtonModel) {
    window.close();
  }
}
