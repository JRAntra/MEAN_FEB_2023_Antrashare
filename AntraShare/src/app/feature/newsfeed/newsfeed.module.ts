import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { WelcomeDirective } from 'src/app/share/directive/welcome.directive';
import { FirstcharPipe } from 'src/app/share/pipe/firstchar.pipe';

@NgModule({
  declarations: [NewsfeedComponent, ContentComponent, WelcomeDirective, FirstcharPipe],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [NewsfeedComponent],
})
export class NewsfeedModule {}
