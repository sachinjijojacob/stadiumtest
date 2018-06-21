import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AddComponent} from './add/add.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'dashboard', component: LandingPageComponent },

  { path: 'add', component: AddComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
// { path: "", redirectTo: "/products", pathMatch: "full" }
