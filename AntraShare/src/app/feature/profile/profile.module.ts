import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsfeedModule } from '../newsfeed/newsfeed.module';
@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule, NewsfeedModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}
