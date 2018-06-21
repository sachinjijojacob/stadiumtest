import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AddComponent} from './add/add.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: LandingPageComponent },

  { path: 'add', component: AddComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
// { path: "", redirectTo: "/products", pathMatch: "full" }
