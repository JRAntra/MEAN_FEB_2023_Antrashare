import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string): any {
    if (value.length > 20) {
      return value.slice(0, 20) + '...';
    }
    return value;
  }
}
