import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { HTTPComponent } from './http/http.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from '../about/about.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // AppComponent,
    // MainComponent,
    // AboutComponent,
    // HomeComponent,
    // ContactComponent,
    // HTTPComponent,
    // SignInComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
