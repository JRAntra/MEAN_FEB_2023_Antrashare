import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [

    CommonModule,
    PrimengModule
  ],
  exports: [
    LoginComponent
  ]

})

export class LoginModule { 
  
}
