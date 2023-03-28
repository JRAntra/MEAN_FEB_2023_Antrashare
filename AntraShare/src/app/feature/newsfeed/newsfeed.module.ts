import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';

import { WelcomeDirective } from './welcome.directive';
import { TruncatePipe } from './truncate/truncate.pipe';
import { LikedListComponent } from './liked-list/liked-list.component';

@NgModule({
  declarations: [
    NewsfeedComponent, 
    ContentComponent,
    WelcomeDirective,
    TruncatePipe,
    LikedListComponent
  ],
  imports: [
    CommonModule, 
    AngularMaterialModule, 
    RouterModule
  ],
  exports: [
    NewsfeedComponent,
    WelcomeDirective
  ],
})
export class NewsfeedModule {}
