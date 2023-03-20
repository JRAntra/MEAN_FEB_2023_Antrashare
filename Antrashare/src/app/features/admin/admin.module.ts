import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class AdminModule { }
