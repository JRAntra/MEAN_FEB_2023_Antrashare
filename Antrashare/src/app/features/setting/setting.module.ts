import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MyProfileModule} from "../my-profile/my-profile.module";
import {NavBarModule} from "../nav-bar/nav-bar.module";


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [

    CommonModule,
    MatCardModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MyProfileModule,
    NavBarModule
  ],

  exports: [
    SettingComponent
  ]
})
export class SettingModule { }
