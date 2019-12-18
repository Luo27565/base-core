import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullScreenService {

  // 是否是全屏 true: 是 false: 否
  public full: boolean;

  constructor() {
  }

}

