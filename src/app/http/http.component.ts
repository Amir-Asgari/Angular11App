import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HTTPComponent implements OnInit {

  responseData : String |undefined

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
   

  ngOnInit(): void {
  }

}
