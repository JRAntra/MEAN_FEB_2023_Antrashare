import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login/login.component';
import { NewsfeedComponent } from './feature/newsfeed/newsfeed.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { RegisterComponent } from './feature/register/register/register.component';
import { SettingPageComponent } from './feature/setting-page/setting-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
