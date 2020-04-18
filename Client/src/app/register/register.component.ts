import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: String = "";
  email: String = "";
  password: String = "";
  conpassword: String = "";
  terms: Boolean = false;

  userwarn: String = "";
  emailwarn: String = "";
  passwordwarn: String = "";
  conpwdwarn: String = "";

  constructor(public http:HttpClient) {

  }

  ngOnInit() {
  }

  checkUsername(){

  }

  checkEmail(){

  }
  checkPassword(){


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

  register(){
    
  }

}
