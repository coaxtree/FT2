import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './helper/routing/app.routing';
import { AuthGuard } from './helper/guards/auth.guard';
import { HttpModule, JsonpModule } from '@angular/http';

import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';
import { HeaderComponent } from './components/header.component';
import { HomePageComponent } from './components/homepage.component';
import { EqualValidator } from './helper/directives/equal-validator.directive';
import { SignupService } from './helper/services/signup.service';


@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule, JsonpModule,],
  declarations: [AppComponent, EqualValidator, LoginComponent, HeaderComponent, SignupComponent,HomePageComponent],
  providers: [AuthGuard, SignupService],
  bootstrap: [AppComponent]
})

export class AppModule { }