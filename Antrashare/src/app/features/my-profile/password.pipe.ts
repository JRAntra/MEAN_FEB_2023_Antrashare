import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string): unknown {
    let ret: string = ""
    for(let i=0; i < value.length; i++){
      ret = ret + "*"
    }
    return ret;
  }

}
