import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
// import {MatButtonModule} from "@angular/material/button";
// import {MatCardModule} from "@angular/material/card";
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";
import {NavBarModule} from "../nav-bar/nav-bar.module";


@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
    imports: [
        CommonModule,
        // MatButtonModule,
        // MatCardModule
      AngularMaterialModule,
      NavBarModule,
    ]
})
export class AdminModule { }
