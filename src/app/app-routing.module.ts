import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Version1Component} from './version1/version1.component';
import {Version2Component} from './version2/version2.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'version1', component: Version1Component},
  {path: 'version2', component: Version2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
