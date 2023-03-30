import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitedTwentyCharacter'
})
@Injectable({
  providedIn: 'root'
})
export class LimitedTwentyCharacterPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length <= 20){
      return value;
    }else{
      return value.substring(0,20) + "...";
    }
  }

}