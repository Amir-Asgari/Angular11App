import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HTTPComponent } from './core/http/http.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core/core-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    HTTPComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreRoutingModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
