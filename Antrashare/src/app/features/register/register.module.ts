import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RegisterComponent } from './register.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    RegisterComponent,
    UserDialogComponent,
    EmailDialogComponent
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        AppRoutingModule,
        MatDialogModule
    ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
