import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCheckboxModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
