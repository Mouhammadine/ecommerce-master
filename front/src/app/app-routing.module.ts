import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo :'/home', pathMatch: 'full'},
  { path: 'login', component: ConnectComponent},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profil', component: ProfilComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    CommonModule,
    RouterModule,
  ]
})
export class AppRoutingModule { }
