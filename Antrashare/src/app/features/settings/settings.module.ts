import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';

import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {DividerModule} from 'primeng/divider';
import {ConfirmDialogModule} from 'primeng/confirmdialog';




@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    SidebarModule,
    DividerModule,
    ConfirmDialogModule
  ],
  exports:[SettingsComponent
  ]
})
export class SettingsModule { }
