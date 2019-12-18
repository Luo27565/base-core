import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpErrorModel} from '../models/http-error.model';
import {SnackbarService} from './snackbar.service';
import {CookieService} from 'ngx-cookie-service';
import {CookieEnum} from '../enums/cookie.enum';

const httpErrorCode = {
  400: '错误请求,请求参数有误',
  401: '未授权，访问被拒绝',
  402: '需要付费',
  403: '禁止，服务器已经理解请求，但是拒绝执行它',
  404: '未找到，服务器找不到指定的资源，文档不存在',
  405: '方法不允许，请求方法（GET、POST、HEAD、Delete、PUT、TRACE等）对指定的资源不适用，用来访问本页面的 HTTP 谓词不被允许（方法不被允许）',
  406: '不接受，请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体',
  407: '需要代理认证，与401响应类似，只不过客户端必须在代理服务器上进行身份验证。代理服务器必须返回一个 Proxy-Authenticate 用以进行身份询问',
  408: '请求超时，客户端没有在服务器预备等待的时间内完成一个请求的发送。客户端可以随时再次提交这一请求而无需进行任何更改',
  409: '冲突，通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功',
  410: '失败，被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址。这样的状况应当被认为是永久性的',
  411: '需要长度，服务器拒绝在没有定义 Content-Length 头的情况下接受请求',
  412: '前提条件失败，服务器在验证在请求的头字段中给出先决条件时，没能满足其中的一个或多个',
  413: '请求实体太长，服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围',
  414: '请求URI太长，请求的URI 长度超过了服务器能够解释的长度',
  501: '页眉指定了未实现的配置，服务器不支持当前请求所需要的某个功能',
  502: '网关失败，作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应',
  503: '服务不可用，服务器由于维护或者负载过重未能应答',
  504: '网关超时，作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器或者辅助服务器收到响应',
  505: '服务器不支持请求中所指明的HTTP版本',
};

/**
 * http请求拦截服务
 * 1. 对发出去的请求统一添加header权限认证(Authorization)
 * 2. 对响应的数据做处理(状态码的处理)
 * 3. 计算请求用的时间(ms)
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router, private snackBar: SnackbarService, private cookie: CookieService) {
  }

  handleStart(req: HttpRequest<any>): HttpRequest<any> {
    const authorization: string = this.cookie.get(CookieEnum.token.toString());
    req = req.clone({
      url: req.url,
      headers: new HttpHeaders({Authorization: authorization === undefined ? '' : authorization}),
    });
    return req;
  }

  handleErrorStatus(errorResponseModel: HttpErrorModel): void {
    const status: number = errorResponseModel.status;
    let error: string;
    if (status === 500) {
      error = errorResponseModel.error.message;
    } else {
      error = httpErrorCode[status];
    }
    this.snackBar.showFail(error).then();
    if (status === 403) {
      this.cookie.deleteAll();
      window.open('http://boss.x2erp.com');
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const element = document.getElementById('loading_mask');
    if (element) {
      element.style.display = 'flex';
    }
    req = this.handleStart(req);
    return next.handle(req).pipe(
      tap(
        success => {
          return success;
        },
        error => {
          this.handleErrorStatus(error);
        }
      ),
      finalize(() => {
        if (element) {
          element.style.display = 'none';
        }
      })
    );
  }

}
