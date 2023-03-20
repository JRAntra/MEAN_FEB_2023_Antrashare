import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { SettingsComponent } from './features/settings/settings.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
