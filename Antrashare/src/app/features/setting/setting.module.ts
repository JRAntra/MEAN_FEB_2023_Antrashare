import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { AngularMaterialModule } from "../../shared/angular-material/angular-material.module";


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [

    CommonModule,
    NavBarModule,
    AngularMaterialModule
  ],

  exports: [
    SettingComponent
  ]
})
export class SettingModule { }
