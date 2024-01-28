import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  public loginUser() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
