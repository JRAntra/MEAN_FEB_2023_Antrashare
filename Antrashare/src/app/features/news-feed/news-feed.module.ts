import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';

import { TabMenuModule } from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    InputTextareaModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    NewsFeedComponent
  ]
})
export class NewsFeedModule { }
