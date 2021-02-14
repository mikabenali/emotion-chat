import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './messenger.component';
import {MessengerRoutingModule} from "./messenger-routing.module";



@NgModule({
  declarations: [
      MessengerComponent
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule
  ]
})
export class MessengerModule { }
