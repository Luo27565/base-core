/**
 * 当服务的状态码返回的是200时,映射出的实体类(全局唯一,不要在建立多个相同的实体类)
 */
export class HttpSuccessModel<T> {
  count?: number;
  data?: T;
  errData?: string;
  errMessage?: string;
  state?: number;
  stateMessage?: any;
  success?: boolean;
  timestamp?: string;
}

