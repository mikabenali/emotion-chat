import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./core/auth/auth.module";
import {ServicesModule} from "./core/services/services.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessengerModule} from "./messenger/messenger.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    MessengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
