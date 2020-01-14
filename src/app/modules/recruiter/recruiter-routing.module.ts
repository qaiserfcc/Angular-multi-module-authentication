import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { AuthGuard } from '../shared/_helpers';
// import { RegisterComponent } from './register';

const recruiterRoutes: Routes = [
  { path: 'recruiter/home',  component: RecruiterHomeComponent, canActivate: [AuthGuard] },
];

//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.

@NgModule({
  imports: [
    RouterModule.forChild(recruiterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecruiterRoutingModule { }