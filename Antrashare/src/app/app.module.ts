import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './features/admin/admin.module';
import { SettingsModule } from './features/settings/settings.module';


import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SettingsModule,
    LoginModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
