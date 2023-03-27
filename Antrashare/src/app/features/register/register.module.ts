import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RegisterComponent } from './register.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';





@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
