import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AdminComponent } from './admin.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ListboxModule} from 'primeng/listbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    VirtualScrollerModule,
    ListboxModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    SplitterModule,
    DividerModule,
    TabViewModule,
    TabMenuModule
    ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule {}
