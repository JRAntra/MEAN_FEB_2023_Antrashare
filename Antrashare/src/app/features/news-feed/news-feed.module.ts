import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './newsFeed/newsFeed.component';
import { StoryListComponent } from './newsFeed/story-list/story-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryListComponent,
    //b,
    //c
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
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