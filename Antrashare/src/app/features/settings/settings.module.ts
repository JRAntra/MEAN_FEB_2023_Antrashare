import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { SettingsComponent } from './settings/settings.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports:[SettingsComponent
  ]
})
export class SettingsModule { }
