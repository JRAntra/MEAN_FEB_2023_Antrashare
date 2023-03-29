import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    MyProfileComponent
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        MatMenuModule
    ],
  exports: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }
