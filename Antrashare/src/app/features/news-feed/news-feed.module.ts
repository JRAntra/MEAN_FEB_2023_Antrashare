import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { WelcomeDirective } from './welcome.directive';
import { StoryComponent } from './story/story.component';


@NgModule({
  declarations: [
    NewsFeedComponent,
    WelcomeDirective,
    StoryComponent
    ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    NewsFeedComponent,
    StoryComponent
  ]
})
export class NewsFeedModule { 
}
