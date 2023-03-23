import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLength',
})
export class ContentLengthPipe implements PipeTransform {
  transform(value: string) {
    if (value.length <= 20) {
      return value;
    } else {
      return value.substring(0, 21) + '...';
    }
  }
}
