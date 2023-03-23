import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstchar'
})
export class FirstcharPipe implements PipeTransform {

  transform(value: any[]) {
    return value.map((info) => ({id: info.id, title: info.title, content: info.content.slice(0, 19) + "......."}))
  }
}
