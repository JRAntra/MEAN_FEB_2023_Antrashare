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
    if(value.length <= 20){
      
      return value;
    }else if(value.length == 23){
      return value.substring(0,20);
    }
    else{
      return value.substring(0,21) + '...';
    };
  }


}
