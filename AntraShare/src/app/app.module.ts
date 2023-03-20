import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedModule } from './feature/newsfeed/newsfeed.module';

import { PageFModule } from './feature/page-f/page-f.module';
import { ProfileModule } from './feature/profile/profile.module';
import { SettingPageModule } from './feature/setting-page.module';

import { LoginComponent } from './feature/login/login/login.component';
import { RegisterComponent } from './feature/register/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageFModule,
    ProfileModule,
    SettingPageModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    NewsfeedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
