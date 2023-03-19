import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const materialComponents = [MatToolbarModule, MatButtonModule];

@NgModule({
  declarations: [
    SettingPageComponent,
  ],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports: [
    SettingPageComponent,
    materialComponents
  ]
})
export class SettingPageModule { }
