import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './features/my-profile/my-profile/my-profile.component';
import { NewsFeedComponent } from './features/news-feed/news-feed/news-feed.component';
import { AdminComponent } from './features/admin/admin/admin.component';
import { SettingsComponent } from './features/settings/settings/settings.component';
import { LoginComponent } from './features/login/login/login.component';
import { RegisterComponent } from './features/register/register/register.component';
import { CanVisitedAdminGuard } from './shared/guards/can-visited-admin.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: 'news-feed', component: NewsFeedComponent },
  {path: 'admin', component: AdminComponent,
                  canActivate:[CanVisitedAdminGuard]},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
