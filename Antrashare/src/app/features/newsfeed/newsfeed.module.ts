import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NewsfeedComponent } from './newsfeed.component';



@NgModule({
  declarations: [
    NewsfeedComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    NewsfeedComponent
  ]
})
export class NewsfeedModule { }
