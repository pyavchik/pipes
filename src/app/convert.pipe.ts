import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    } else {
      return value * 1.60934;
    }
  }
}
