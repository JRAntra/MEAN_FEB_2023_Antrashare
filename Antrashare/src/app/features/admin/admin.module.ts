import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AdminComponent } from './admin/admin.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PrimengModule
    ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {}
