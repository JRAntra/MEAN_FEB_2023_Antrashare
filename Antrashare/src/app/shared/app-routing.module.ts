import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../features/login/login.component';
import { MyProfileComponent } from '../features/my-profile/my-profile.component';
import { NewsfeedComponent } from '../features/newsfeed/newsfeed.component';
import { SettingComponent } from '../features/setting/setting.component';
import { RegisterComponent } from '../features/register/register.component';
import {AdminComponent} from "../features/admin/admin.component";
import {AdmincheckGuard} from "../core/admin-check/admincheck.guard";
const routes: Routes = [
  // http://localhost:4200/
  { path: 'login', component: LoginComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: "setting", component: SettingComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin", component: AdminComponent ,canActivate: [AdmincheckGuard]},
  { path: "", component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
