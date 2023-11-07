import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { MisionComponent } from './Mision/Mision.component';
import { OrganigramaComponent } from './Organigrama/Organigrama.component'
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { TabsSectionComponent } from './sections/tabs-section/tabs-section.component';
import { IotComponent } from './iot/iot.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'Iot',             component: IotComponent },
    { path: 'contact',             component: ContactComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path:  'Organigrama',        component: OrganigramaComponent},
    { path: 'Mision',          component: MisionComponent },
    { path: 'Tabs',          component: TabsSectionComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
