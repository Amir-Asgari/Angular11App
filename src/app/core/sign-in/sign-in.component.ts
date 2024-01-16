import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  responseData: string | undefined;
  responseId: string | undefined;
  responseBody: string | undefined;

  constructor(private http: HttpClient) {}
  logincheck() {
    this.http
      .post('https://api.irannara.com/api/v1/Account/UserPassLogin', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        ({ title, id, body , password , username}: any) => {
          this.responseData = title;
          this.responseBody = body;
          this.responseId = id;
          this.password= password;
          this.username= username;

          console.log(this.responseData);
          console.log(this.username);
        },
        
        (error) => {
          console.log('Error', error);
        }
      );
  }

  ngOnInit(): void {}
}
