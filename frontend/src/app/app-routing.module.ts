import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HelloListComponent} from "./hello-list/hello-list.component";
import {AuthGuard} from "./security/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'hello', component: HelloListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
