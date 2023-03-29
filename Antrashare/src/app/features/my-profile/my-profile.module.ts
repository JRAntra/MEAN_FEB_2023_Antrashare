import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NewsfeedModule } from '../newsfeed/newsfeed.module';

@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NewsfeedModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }
