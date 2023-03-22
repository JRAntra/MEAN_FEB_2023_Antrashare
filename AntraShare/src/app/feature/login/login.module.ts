import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { RegisterModule } from '../register/register.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RegisterModule,
    RouterModule,
    FormsModule
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCheckboxModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
