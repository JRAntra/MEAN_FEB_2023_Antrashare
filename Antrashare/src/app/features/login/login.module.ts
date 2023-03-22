import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [

    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  exports: [
    LoginComponent
  ]

})

export class LoginModule { 
  
}
