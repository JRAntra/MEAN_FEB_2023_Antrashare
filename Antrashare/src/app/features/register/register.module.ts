import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
