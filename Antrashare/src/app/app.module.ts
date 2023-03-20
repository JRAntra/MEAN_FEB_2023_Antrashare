import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { MyProfileModule } from './features/my-profile/my-profile.module';
import { NewsFeedModule } from './features/news-feed/news-feed.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyProfileModule,
    NewsFeedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
