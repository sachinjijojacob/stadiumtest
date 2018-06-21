import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatMenuModule} from '@angular/material';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {ModalDialogService} from 'ngx-modal-dialog';
import {PopupComponent} from './popup/popup.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
