import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { RegisterComponent } from './register.component';
import { MatDialogModule } from "@angular/material/dialog";
import { UserDialogueComponent } from "./user-dialogue/user-dialogue.component";
import { EmailDialogueComponent } from "./email-dialogue/email-dialogue.component";
import { SuccessDialogueComponent } from "./success-dialogue/success-dialogue.component";



@NgModule({
  declarations: [
    RegisterComponent,
    UserDialogueComponent,
    EmailDialogueComponent,
    SuccessDialogueComponent
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
