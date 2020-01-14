import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationModule } from './modules/authentication/authentication.module' //<-- import
import { RecruiterModule } from './modules/recruiter/recruiter.module' //<-- import
import { AppRoutingModule } from './app-routing.module'; //<-- import
import { AlertComponent } from './modules/shared/_components/alert/alert.component';
// import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    // PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AuthenticationModule,
    RecruiterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
