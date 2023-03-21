import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterModule } from '../register/register.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RegisterModule,
    RouterModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCheckboxModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
