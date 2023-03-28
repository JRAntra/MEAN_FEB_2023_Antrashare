import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { LikelistComponent } from '../likelist/likelist/likelist/likelist.component';
import { WelcomeDirective } from './welcome.directive';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [
    NewsfeedComponent, 
    ContentComponent,
    LikelistComponent,
    WelcomeDirective,
    TruncatePipe
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
