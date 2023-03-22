import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
