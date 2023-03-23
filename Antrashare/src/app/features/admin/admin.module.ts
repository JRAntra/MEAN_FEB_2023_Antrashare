import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
    ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {}
