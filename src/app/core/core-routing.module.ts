import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent , canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'notAuthorized', component: NotAuthorizedComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
