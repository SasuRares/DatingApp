import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {} //too early to make http request, must construct component first, and make sure we have http service avail
  
  ngOnInit(){
    this.getUsers();
  }
  
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => { //subscribe takes 3 params response users complete ( un fel de try catch finally)
      this.users = response;
    }, error => {
      console.log(error);
    })
    }
}                