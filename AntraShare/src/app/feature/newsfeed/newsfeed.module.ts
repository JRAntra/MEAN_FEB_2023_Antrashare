import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';

import { WelcomeDirective } from './welcome.directive';
import { TruncatePipe } from './truncate/truncate.pipe';
import { LikeListComponent } from './likeList/like-list/like-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsfeedComponent,
    ContentComponent,
    WelcomeDirective,
    TruncatePipe,
    LikeListComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [NewsfeedComponent, WelcomeDirective, LikeListComponent],
})
export class NewsfeedModule {}
