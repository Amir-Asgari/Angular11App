import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username: string = '';
  password: string = '';
  responseData: string | undefined;

  constructor(private http: HttpClient) { }
  sendHttpRequest() {
    // اینجا لاگین به سرور تستی را انجام دهید
    // اطلاعات نام کاربری و رمز را به عنوان پارامترها به سرور ارسال کنید
    // سپس پاسخ را در متغیر responseData ذخیره کنید
    // مثال:
    this.http.post('آدرس_سرور_تستی', { username: this.username, password: this.password })
      .subscribe(
        (data: any) => {
          this.responseData = data.message; // در اینجا ممکن است پیام خاصی از سرور دریافت کنید
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }

  ngOnInit(): void {
  }

}
