import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NewsfeedModule } from '../newsfeed/newsfeed.module';
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatMenuModule,
    NewsfeedModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }
