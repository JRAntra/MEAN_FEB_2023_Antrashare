import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './newsFeed/newsFeed.component';


@NgModule({
  declarations: [
    NewsFeedComponent,
    //b,
    //c
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NewsFeedComponent,
    //b
    //c
  ]
})
export class NewsFeedModule {}

// NgModule(){
//   return function foo ({}){
//     return  NewsFeedComponent
//   }
  
// }

// @NgModule() foo