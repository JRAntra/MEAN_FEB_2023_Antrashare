import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';



@NgModule({
  declarations: [
    NewsfeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsfeedComponent
  ]
})
export class NewsfeedModule { }
