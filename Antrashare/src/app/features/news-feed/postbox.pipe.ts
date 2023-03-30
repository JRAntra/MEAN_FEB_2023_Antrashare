import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postbox',
  pure: false
})
@Injectable({
  providedIn: 'root'
})
export class PostboxPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length <= 2){
      return value;
    }
    else{
      return value.substring(0,2) + "..."
    };
  }


}
