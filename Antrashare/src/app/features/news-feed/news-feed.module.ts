import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';



@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    NewsFeedComponent
  ]
})
export class NewsFeedModule { }
