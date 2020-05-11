import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { sha512 } from 'js-sha512';

import { UserData } from '../@core/data/users';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = "";
  password: String = "";
  
  warning: String = "";
  loggedIn: String = "";

  private destroy$: Subject<void> = new Subject<void>();
  user: any;
  
  constructor(private http: HttpService,
    private userService: UserData) {

  }

  ngOnInit() {
    this.http
      .returnLogin()
      .subscribe((msg: string) => {
        this.loggedIn = msg;

        this.userService.getUsers()
        .pipe(takeUntil(this.destroy$))
        .subscribe((users: any) => this.user = users.maxi);
      });
  }

  login(){
    if(this.username.length >= 3 && this.password.length >=8){
      this.warning = "";
      const loginData = { 
        "username" : this.username, 
        "password": sha512(this.password+"")  
      };
      this.http.login(loginData);
    }
    else{
      if(this.username.length<3){
        this.warning = "Der Username muss mindestend 3 Zeichen lang sein.";
      }
      else{if(this.password.length<6){
        this.warning = "Das Passwort muss mindestens 8 Zeichen lang sein."
      }
      else{
        this.warning = "Fehler, bitte versuchen Sie es erneut."
      }}
    }
  }
}
