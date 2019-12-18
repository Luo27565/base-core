import { TableServiceEnum } from '../enums/table-service.enum';

export class PaginationParams {

  // 分页的页数
  public pageNum: number;

  // 分页的大小
  public pageSize: number;

  // 构造函数
  constructor(pageNum: number, pageSize: number) {
    this.pageNum = pageNum;
    this.pageSize = pageSize;
  }

}

export class TableServiceModel {

  // 服务名称
  public name: string;

  // 是否为分页查询
  public isPagination: boolean;

  // 参数
  public params: { [key: string]: any };

  // 请求方式
  public method: TableServiceEnum;

  // 是否初次加载服务
  public autoLoad: boolean;

  // 分页的参数
  public paginationParams: PaginationParams;

  // 构造函数
  constructor(name: string, {isPagination = true, params = {}, method = TableServiceEnum.POST, autoLoad = true, paginationParams = new PaginationParams(1, 15)}) {
    this.name = name;
    this.isPagination = isPagination;
    this.params = params;
    this.method = method;
    this.autoLoad = autoLoad;
    this.paginationParams = paginationParams;
  }

}
