import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
