import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'i18n',
})
export class I18nPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'zh':
        return 'zh-cn';
      case 'en':
        return 'en-us';
      case 'zh-CN':
        return 'zh-cn';
      case 'en-US':
        return 'en-us';
      default:
        console.log(`语言未在I18nPipe中定义${value}`);
        return 'en-us';
    }
  }

}
