import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ProfileComponent } from './feature/profile/profile.component';
import { NewsfeedComponent } from './feature/newsfeed/newsfeed.component';
import { SettingPageComponent } from './feature/setting-page/setting-page.component';
const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'news', component: NewsfeedComponent},
  { path: 'setting', component: SettingPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
