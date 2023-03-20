import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MyProfileComponent } from './my-profile/my-profile.component';
import {ButtonModule} from 'primeng/button';

import { TabMenuModule } from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import {ImageModule} from 'primeng/image';



@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ButtonModule,
    TabMenuModule,
    AvatarModule,
    AvatarGroupModule,
    ListboxModule,
    FormsModule,
    ImageModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class MyProfileModule { }
