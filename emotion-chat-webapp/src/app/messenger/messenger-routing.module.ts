import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessengerComponent} from "./messenger.component";
import {AuthGuard} from "../core/auth/auth.guard";

const routes: Routes = [
    { path: 'messenger', component: MessengerComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessengerRoutingModule { }