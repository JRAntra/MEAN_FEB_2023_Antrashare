import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './register.component';
import { MatDialogModule } from "@angular/material/dialog";



@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
  ]
})
export class RegisterModule { }
