import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { WelcomeMsgDirective } from './welcome-msg.directive';
@NgModule({
  declarations: [NewsfeedComponent, ContentComponent, WelcomeMsgDirective],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [NewsfeedComponent],
})
export class NewsfeedModule {}
