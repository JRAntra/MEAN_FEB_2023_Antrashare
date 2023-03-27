import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ListboxModule} from 'primeng/listbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {MenuItem} from 'primeng/api';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageModule} from 'primeng/image';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {ChipsModule} from 'primeng/chips';
import {EditorModule} from 'primeng/editor';
import { MessagesModule } from 'primeng/messages';
import {OverlayPanelModule} from 'primeng/overlaypanel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    VirtualScrollerModule,
    ListboxModule,
    ConfirmDialogModule,
    SplitterModule,
    DividerModule,
    TabViewModule,
    TabMenuModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    FormsModule,
    ReactiveFormsModule,
    ImageModule,
    InputTextareaModule,
    CardModule,
    SidebarModule,
    ChipsModule,
    EditorModule,
    MessagesModule,
    OverlayPanelModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    VirtualScrollerModule,
    ListboxModule,
    ConfirmDialogModule,
    SplitterModule,
    DividerModule,
    TabViewModule,
    TabMenuModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    FormsModule,
    ReactiveFormsModule,
    ImageModule,
    InputTextareaModule,
    CardModule,
    SidebarModule,
    ChipsModule,
    EditorModule,
    MessagesModule,
    OverlayPanelModule
  ]
})
export class PrimengModule { }
