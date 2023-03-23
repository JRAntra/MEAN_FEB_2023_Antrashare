import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { WelcomeMessageDirective } from './welcome-message.directive';



@NgModule({
  declarations: [
    NewsFeedComponent,
    WelcomeMessageDirective
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
