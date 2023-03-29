import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NewsfeedComponent } from './newsfeed.component';
import {WelcomeDirective} from "../../shared/welcome.directive";
// import {MatProgressBarModule} from "@angular/material/progress-bar";
import {DisplayCharPipe} from "../../shared/display-char.pipe";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";


@NgModule({
  declarations: [
    NewsfeedComponent,
    WelcomeDirective,
    DisplayCharPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    MatMenuModule,

  ],
  exports: [
    NewsfeedComponent
  ],
  providers: [
    MatMenuTrigger
  ]
})
export class NewsfeedModule { }
