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
import { NewsfeedServiceService } from './newsfeed_service/newsfeed-service.service';
import { SessionTimeoutDialogComponent } from './session-timeout-dialog/session-timeout-dialog.component';
import { DialogTimerService } from './dialog-service/dialog-timer.service';

@NgModule({
  declarations: [
    NewsfeedComponent,
    ContentComponent,
    WelcomeDirective,
    TruncatePipe,
    LikeListComponent,
    SessionTimeoutDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [NewsfeedComponent, WelcomeDirective, LikeListComponent],
  providers: [NewsfeedServiceService, DialogTimerService],
})
export class NewsfeedModule {}
