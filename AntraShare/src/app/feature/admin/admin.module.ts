import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
