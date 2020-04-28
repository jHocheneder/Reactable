import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  emailwarn: String = "Ungültige Email";
  passwordwarn: String = "";
  conpwdwarn: String = "";


  constructor(public http:HttpClient) {

  }

  ngOnInit() {
    
  }

  checkUsername(){
    if(this.username.length<3 || this.username.length>25){
      this.userwarn = "Der Username muss zwischen 3 und 25 Zeichen lang sein."
      return true;
    }

    return false;
  }

  checkEmail(){
    
      return true;
  }
  checkPassword(){
    return true;

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
