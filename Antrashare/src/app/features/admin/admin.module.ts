import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AngularMaterialModule } from "../../shared/angular-material/angular-material.module";
import { NavBarModule } from "../nav-bar/nav-bar.module";


@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NavBarModule,
  ]
})
export class AdminModule { }
