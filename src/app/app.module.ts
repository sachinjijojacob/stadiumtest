import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule} from '@angular/material';
import {ModalModule} from 'ngx-bootstrap';
import {MainService} from './main-service.service';
import { AddComponent } from './add/add.component';
import {routingModule} from './routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    ModalModule.forRoot(),
    routingModule,
    ReactiveFormsModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
