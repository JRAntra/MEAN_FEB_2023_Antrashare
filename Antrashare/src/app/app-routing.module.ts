import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { SettingsComponent } from './features/settings/settings.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
