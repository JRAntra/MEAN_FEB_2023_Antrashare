import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { WelcomeMessageDirective } from './welcome/welcome-message.directive';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [
    NewsfeedComponent, 
    ContentComponent,
    WelcomeMessageDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule, 
    AngularMaterialModule, 
    RouterModule
  ],
  exports: [
    NewsfeedComponent,
    WelcomeMessageDirective
  ],
})
export class NewsfeedModule {}
