import {Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild, OnDestroy, AfterViewInit, ElementRef} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TableColumnModel} from './models/table-column.model';
import {TableColumnEnum} from './enums/table-column.enum';
import {TableActionColumnComponentOutputModel} from '../../table-columns/table-action-column/table-action-column.component';
import {SelectionModel} from '@angular/cdk/collections';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

// 输入参数
export class BaseTableComponentInputModel {
  // 主键
  public key: string;

  // 表格的头部
  public columns: TableColumnModel[];

  // 数据源
  public dataSource: { [key: string]: any }[];

  // 表格的高度
  public height?: string = 'auto';

  // 是否需要显示合计栏
  public showFooter?: boolean = false;

  // 是否需要全选列
  public showSelect?: boolean = false;

  // 合计栏的数据
  public sums?: { [key: string]: any } = {};
}

// 操作栏按钮的点击事件
export class BaseTableComponentActionOutputModel {

  // 操作栏按钮的实例
  public action: TableActionColumnComponentOutputModel;

  // 当前选中行的数据
  public data: any;

}

// 行的点击事件
export class BaseTableComponentRowOutputModel {
  // 当前选中行的数据
  public data: any;
}

@Component({
  selector: 'core-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  providers: [BaseTableComponentActionOutputModel, BaseTableComponentRowOutputModel]
})
export class BaseTableComponent implements OnInit, DoCheck, OnDestroy, AfterViewInit {
  @ViewChild(MatSort, {static: true})
  public sort: MatSort;

  @Input()
  public model: BaseTableComponentInputModel;

  // 需要显示的列
  public displayedColumns: string[] = [];

  // 数据源
  public dataSource: MatTableDataSource<any>;

  @Output()
  public tableActionPress: EventEmitter<BaseTableComponentActionOutputModel> = new EventEmitter();

  @Output()
  public tableRowPress: EventEmitter<BaseTableComponentRowOutputModel> = new EventEmitter();

  @Output()
  public tableRowSelect: EventEmitter<BaseTableComponentRowOutputModel[]> = new EventEmitter();

  @Output()
  public scrollEvent = new EventEmitter();

  @ViewChild('tableContainer', {static: true}) tableContainer: ElementRef;

  // 当前活动的编号
  public activeId: string = null;

  // 文本列
  public text: TableColumnEnum = TableColumnEnum.text;

  // 操作列
  public action: TableColumnEnum = TableColumnEnum.action;

  // 图片列
  public imageTitleDescription: TableColumnEnum = TableColumnEnum.imageTitleDescription;

  // 单一图片列
  public image: TableColumnEnum = TableColumnEnum.image;

  // 滚动事件监听
  public subscribeScroll: any;

  selection = new SelectionModel<any>(true, []);

  constructor(private button: BaseTableComponentActionOutputModel, private row: BaseTableComponentRowOutputModel) {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onSelect() {
    this.tableRowSelect.emit(this.selection.selected);
  }

  ngOnInit() {
    this.getDisplayColumns();
    this.dataSource = new MatTableDataSource<any>(this.model.dataSource);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    // 监听table滚动
    this.subscribeScroll = fromEvent(this.tableContainer.nativeElement.firstChild, 'scroll')
      .pipe(
        debounceTime(50) // 防抖
      )
      .subscribe((event: any) => {
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;

        if (scrollTop + clientHeight === scrollHeight) {
          this.scrollEvent.emit(true);
        }
      });
  }

  ngDoCheck(): void {
    this.dataSource = new MatTableDataSource<any>(this.model.dataSource);
    // this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subscribeScroll.unsubscribe();
  }

  getDisplayColumns() {
    this.model.columns.forEach(item => {
      this.displayedColumns.push(item.key);
    });
    if (this.model.showSelect) {
      this.displayedColumns.unshift('select');
    }
  }

  // 操作栏的点击事件
  onActionPress(action, element) {
    this.button.action = action;
    this.button.data = element;
    this.tableActionPress.emit(this.button);
  }

  // 行的点击事件
  onRowPress(data) {
    this.activeId = data[this.model.key];
    this.row.data = data;
    this.tableRowPress.emit(this.row);
  }
}
