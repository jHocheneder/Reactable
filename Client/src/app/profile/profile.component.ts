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

  username: String = "";
  password: String = "";
  conpassword: String = "";

  userwarn: String = "";
  passwordwarn: String = "";
  conpwdwarn: String = "";

  loggedIn: Boolean = false;


  constructor(public router: Router, public http: HttpService) { 
  }

  login() {
    this.router.navigate(['auth/login']);
  }

  register(){
    this.router.navigate(['auth/register']);
  }

  ngOnInit() {

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
