import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

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
    this.http.get('https://jsonplaceholder.typicode.com/posts/2').subscribe(
      ({ title, id, body }: any) => {
        this.responseData = title;
        this.responseBody = body;
        this.responseId = id;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  ngOnInit(): void {}
}
