import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { NavBarComponent } from './nav-bar.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTabsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
