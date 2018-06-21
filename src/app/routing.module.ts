import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  { path: 'add', component: AddComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
// { path: "", redirectTo: "/products", pathMatch: "full" }
