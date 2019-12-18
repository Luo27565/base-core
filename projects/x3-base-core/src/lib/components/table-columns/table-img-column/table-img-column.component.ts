import { Component, OnInit, Input } from '@angular/core';

// 输入参数
export class TableImgColumnComponentInputModel {

  // 左边的图片地址 key
  public imgUrl: string;

  // 标题 key
  public title: string;

  // 描述 key
  public description: string;

}

@Component({
  selector: 'core-table-img-column',
  templateUrl: './table-img-column.component.html',
  styleUrls: ['./table-img-column.component.scss']
})
export class TableImgColumnComponent implements OnInit {

  @Input()
  input: TableImgColumnComponentInputModel;

  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
