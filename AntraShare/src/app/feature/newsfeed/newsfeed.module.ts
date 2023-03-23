import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { WelcomeDirective } from './welcome.directive';

@NgModule({
  declarations: [NewsfeedComponent, ContentComponent, WelcomeDirective, ],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [NewsfeedComponent],
})
export class NewsfeedModule {}
