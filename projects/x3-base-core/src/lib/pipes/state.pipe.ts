import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      case '0':
        return '草稿';
      case '1':
        return '启用';
      case '2':
        return '停用';
      case '-1':
        return '已删除';
    }
    return value;
  }

}
