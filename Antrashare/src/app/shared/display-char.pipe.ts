import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayChar'
})
export class DisplayCharPipe implements PipeTransform {

  transform(value: string): string{
    return value.length > 20 ? value.slice(0,20) + "..." : value
  }

}
