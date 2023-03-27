import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { MyProfileModule } from './features/my-profile/my-profile.module';
import { NewsFeedModule } from './features/news-feed/news-feed.module';
import { AdminModule } from './features/admin/admin.module';
import { SettingsModule } from './features/settings/settings.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { NavbarComponent } from './features/navbar/navbar.component';

import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { PrimengModule } from './shared/primeng/primeng.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './features/header/header.component';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyProfileModule,
    NewsFeedModule,
    AdminModule,
    SettingsModule,
    LoginModule,
    RegisterModule,
    ButtonModule,
    SelectButtonModule,
    ReactiveFormsModule,
    PrimengModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
