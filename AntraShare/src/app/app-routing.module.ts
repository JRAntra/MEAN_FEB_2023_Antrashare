import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './feature/profile/profile.component';
import { NewsfeedComponent } from './feature/newsfeed/newsfeed.component';
import { SettingPageComponent } from './feature/setting-page/setting-page.component';
import { LoginComponent } from './feature/login/login/login.component';
import { AdminComponent } from './feature/admin/admin/admin.component';
import { RegisterComponent } from './feature/register/register/register.component';
import { ContentComponent } from './feature/newsfeed/content/content.component';
import { LikelistComponent } from './feature/likelist/likelist/likelist/likelist.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'newsfeed/:id', component: ContentComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'setting', component: SettingPageComponent },
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'likelist', component: LikelistComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
