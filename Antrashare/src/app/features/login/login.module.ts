import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [

    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent
  ]

})

export class LoginModule { 
  
}
