import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { WelcomeDirective } from './welcome.directive';
import { PostboxPipe } from './postbox.pipe';
import { StoryComponent } from './story/story.component';
// import { LikelistComponent } from './likelist/likelist.component';


@NgModule({
  declarations: [
    NewsFeedComponent,
    WelcomeDirective,
    PostboxPipe,
    StoryComponent,
    // LikelistComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    NewsFeedComponent,
    StoryComponent,
    PostboxPipe
  ]
})
export class NewsFeedModule { 
}
