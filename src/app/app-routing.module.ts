import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './core/sign-in/sign-in.component';

const routes: Routes = [
  // { path: '', component: MainComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'signIn', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
