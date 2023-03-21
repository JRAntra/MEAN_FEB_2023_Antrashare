import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedModule } from './feature/newsfeed/newsfeed.module';

import { ProfileModule } from './feature/profile/profile.module';
import { SettingPageModule } from './feature/setting-page.module';

import { LoginModule } from './feature/login/login.module';
import { NavbarModule } from './feature/navbar/navbar.module';
import { AngularMaterialModule } from './share/angular-material/angular-material.module';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './feature/register/register/register.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { LoginComponent } from './feature/login/login/login.component';
import { NewsfeedComponent } from './feature/newsfeed/newsfeed.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    SettingPageModule,
    NewsfeedModule,
    AngularMaterialModule,
    LoginModule,
    NavbarModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
