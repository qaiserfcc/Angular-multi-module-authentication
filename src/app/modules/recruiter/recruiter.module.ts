import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruiterHomeComponent } from './recruiter-home/recruiter-home.component';
import { RecruiterRoutingModule } from './recruiter-routing.module' //<-- import



@NgModule({
  declarations: [RecruiterHomeComponent],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
