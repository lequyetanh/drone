import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
/// <reference path="types/MicrosoftMaps/CustomMapStyles.d.ts" />
/// <reference path="types/MicrosoftMaps/Microsoft.Maps.d.ts" />


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DroneManagerComponent } from './drone-manager/drone-manager.component';
import { DialogAddNewDroneComponent } from './dialog/dialog-add-new-drone/dialog-add-new-drone.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { DialogListDroneComponent } from './dialog/dialog-list-drone/dialog-list-drone.component';
import { DialogMessageComponent } from './dialog/dialog-message/dialog-message.component';
import { FollowingComponent } from './following/following.component';
import { AllDroneComponent } from './all-drone/all-drone.component';

import { WebSocketAPI } from './service/websocketAPI-service';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DroneManagerComponent,
    DialogAddNewDroneComponent,
    DialogListDroneComponent,
    DialogMessageComponent,
    FollowingComponent,
    AllDroneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ...modules,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogAddNewDroneComponent,
    DialogListDroneComponent,
    DialogMessageComponent
  ],
  providers: [
    WebSocketAPI,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

