import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// 通用搜索框 输入框 + 右边的搜索按钮
export class CommonSearchBoxComponentInputModel {

  // 数据的key值
  public key: string;

  // 显示的提示文本
  public placeholder: string;

  // 默认值
  public value: string;

}

// 输出参数
export class CommonSearchBoxComponentOutputModel {

  // 输入框的数值
  public value: string;

}

@Component({
  selector: 'core-common-search-box',
  templateUrl: './common-search-box.component.html',
  styleUrls: ['./common-search-box.component.scss'],
  providers: [
    CommonSearchBoxComponentOutputModel
  ]
})
export class CommonSearchBoxComponent implements OnInit {

  @Input()
  public model: CommonSearchBoxComponentInputModel;

  @Output()
  public output: EventEmitter<CommonSearchBoxComponentOutputModel> = new EventEmitter();

  constructor(private outputModel: CommonSearchBoxComponentOutputModel) {
  }

  ngOnInit() {
  }

  // 搜索
  onSearch() {
    this.outputModel.value = this.model.value;
    this.output.emit(this.outputModel);
  }

  // 清除搜索框的内容
  clearSearch() {
    this.model.value = '';
  }

}
