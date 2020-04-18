import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";

  warning: String = "";

  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.http.listen('test event').subscribe((data) => {
      console.log(data);
    });
  }

  login(){
    if(this.username.length >= 3 && this.password.length >=8){
      this.http.login();
    }
    else{
      if(this.username.length<3){
        this.warning = "Der Username muss mindestend 3 Zeichen lang sein.";
      }
      if(this.password.length<6){
        this.warning = "Das Passwort muss mindestens 8 Zeichen lang sein."
      }
      else{
        this.warning = "Fehler, bitte versuchen Sie es erneut."
      }
    }
  }
}
