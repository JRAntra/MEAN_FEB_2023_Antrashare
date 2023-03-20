import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [

    CommonModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [
    LoginComponent
  ]

})

export class LoginModule { 
  
}
