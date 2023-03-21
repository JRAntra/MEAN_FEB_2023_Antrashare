import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NavBarModule} from "../nav-bar/nav-bar.module";
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [

    CommonModule,
    // MatCardModule,
    // MatCardModule,
    // MatCardModule,
    // MatButtonModule,
    NavBarModule,
    AngularMaterialModule
  ],

  exports: [
    SettingComponent
  ]
})
export class SettingModule { }
