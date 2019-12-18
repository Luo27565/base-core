import { Component, Input, OnInit } from '@angular/core';

// 输入参数
export class ContentHeaderComponentInputModel {

  // 标题
  public title: string;

}

@Component({
  selector: 'core-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Input()
  public model: ContentHeaderComponentInputModel;

  constructor() {
  }

  ngOnInit() {
  }

}
