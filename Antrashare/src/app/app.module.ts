import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Import page modules
import { MyProfileModule } from './features/my-profile/my-profile.module';
import { NewsFeedModule } from './features/news-feed/news-feed.module';
import { AdminModule } from './features/admin/admin.module';
import { SettingsModule } from './features/settings/settings.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { NavbarComponent } from './features/navbar/navbar.component';

//Import module that has to be used from library to the app main component
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { PrimengModule } from './shared/primeng/primeng.module';

<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './features/header/header.component';

import { HttpClientModule } from '@angular/common/http';

=======
//Import HTTP
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 55e197e57ed2ad05adebefa67f2a70006a1f6707



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    HeaderComponent,
=======

>>>>>>> 55e197e57ed2ad05adebefa67f2a70006a1f6707
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
<<<<<<< HEAD
    PrimengModule,
    HttpClientModule
=======
    HttpClientModule,

>>>>>>> 55e197e57ed2ad05adebefa67f2a70006a1f6707
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
