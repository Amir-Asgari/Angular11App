import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular11App';
  responseData: string | undefined;
  responseId: string | undefined;
  responseBody: string | undefined;

  constructor(private http: HttpClient) {}

  sendHttpRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      // (data: any) => {
      ({title , id , body}: any) => {
        this.responseData = title;
        this.responseId = id;
        this.responseBody = body;
        // console.log(data);
        
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
