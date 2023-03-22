import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page.component';
import { AngularMaterialModule } from 'src/app/share/angular-material/angular-material.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingPageComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    SettingPageComponent,
  ]
})
export class SettingPageModule { }
