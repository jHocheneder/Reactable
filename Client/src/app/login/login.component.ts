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

  constructor(public http:HttpService) {

  }

  ngOnInit() {

  }

  login(){
    if(this.username.length >= 3 && this.password.length >=6){
      this.http.login();
    }
    else{
      if(this.username.length<3){
        this.warning = "Der Username muss mindestend 3 Zeichen lang sein.";
      }
      if(this.password.length<6){
        this.warning = "Das Passwort muss mindestens 6 Zeichen lang sein."
      }
      else{
        this.warning = "Fehler, bitte versuchen Sie es erneut."
      }
    }
  }
}
