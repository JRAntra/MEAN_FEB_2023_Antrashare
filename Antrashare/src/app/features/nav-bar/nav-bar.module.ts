import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/shared/app-routing.module';
import { NavBarComponent } from './nav-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
