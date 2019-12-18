import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-table-single-img-column',
  templateUrl: './table-single-img-column.component.html',
  styleUrls: ['./table-single-img-column.component.scss']
})
export class TableSingleImgColumnComponent implements OnInit {
  @Input()
  input: string;

  constructor() {}

  ngOnInit() {}
}
