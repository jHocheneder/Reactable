import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { sha512 } from 'js-sha512';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string = "";
  password: string = "";
  conpassword: string = "";

  userwarn: string = "";
  passwordwarn: string = "";
  conpwdwarn: string = "";

  loggedIn: boolean = false;


  constructor(public router: Router, public http: HttpService) { 
  }

  login() {
    this.router.navigate(['auth/login']);
  }

  register(){
    this.router.navigate(['auth/register']);
  }

  ngOnInit() {
    this.http
    .returnLogin()
    .subscribe((msg: string) => {
      if (msg == 'error, not found') {
      } else {
        localStorage.setItem('username', this.username);
        this.router.navigate(['pages']);
      }
    });

    if(localStorage.getItem('username') != null){
      this.username = localStorage.getItem('username');
      this.loggedIn = true;
    }
    
  }

  checkUsername(){
    if(this.username.length<3 || this.username.length>25){
      this.userwarn = "Der Username muss zwischen 3 und 25 Zeichen lang sein."
      return true;
    }

    return false;
  }

  checkPassword(){
    if(this.password.length<8){
      this.passwordwarn = "Das Passwort muss mindestens 8 Zeichen lang sein."
      return true;
    }
    return false;
  }

  checkConPwd(){
    if(this.conpassword === this.password){
      return false;
    }
    else{
      this.conpwdwarn = "Die Passwörter stimmen nicht überein!";
      return true;
    }
  }

  update(){
    if(!this.checkUsername() && !this.checkPassword() && !this.checkConPwd()){
      const loginData = { 
        "userId" : localStorage.getItem('userId'),
        "username" : this.username,
        "password": sha512(this.password+"") 
      };
      console.log(loginData);
      this.http.updateUser(loginData);
      this.router.navigate(['pages']);
    }
  }

}
