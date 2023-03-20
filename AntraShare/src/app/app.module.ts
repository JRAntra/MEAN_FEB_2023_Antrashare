import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedModule } from './feature/newsfeed/newsfeed.module';

import { ProfileModule } from './feature/profile/profile.module';
import { SettingPageModule } from './feature/setting-page.module';

// import { LoginComponent } from './feature/login/login/login.component';
// import { RegisterComponent } from './feature/register/register/register.component';
// import { AngularMaterialModule } from './share/angular-material/angular-material.module';

import { NavbarComponent } from './feature/navbar/navbar.component';
import { AdminModule } from './feature/admin/admin.module';
import { LoginModule } from './feature/login/login.module';
import { RegisterModule } from './feature/register/register.module';

@NgModule({
  declarations: [AppComponent, 
   NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ProfileModule,
    SettingPageModule,
    NewsfeedModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
