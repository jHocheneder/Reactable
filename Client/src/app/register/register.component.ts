import { Component, OnInit } from '@angular/core';
import { sha512 } from 'js-sha512';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

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

  checkterms: Boolean = false;

  registered: string = "";



  constructor(public http: HttpService, private router: Router) {

  }

  ngOnInit() {
    this.http
      .returnRegister()
      .subscribe((msg: string) => {
        console.log(msg);
        this.registered = msg;
      });
  }

  checkUsername() {
    if (this.username.length < 3 || this.username.length > 25) {
      this.userwarn = "Der Username muss zwischen 3 und 25 Zeichen lang sein."
      return true;
    }

    return false;
  }

  checkEmail() {
    if (this.email.includes("@") && this.email.includes(".", this.email.indexOf("@") + 2)) {
      if (this.email.indexOf("@") > 0 && this.email.length > this.email.indexOf(".", this.email.indexOf("@") + 2) + 2) {
        return false;
      }

      return true;
    }
    return true;
  }
  checkPassword() {
    if (this.password.length < 8) {
      this.passwordwarn = "Das Passwort muss mindestens 8 Zeichen lang sein."
      return true;
    }
    return false;
  }

  checkConPwd() {
    if (this.conpassword === this.password) {
      return false;
    }
    else {
      this.conpwdwarn = "Die Passwörter stimmen nicht überein!";
      return true;
    }
  }

  register() {
    console.log(sha512("sdf"));
    console.log("test");
    console.log(this.terms)
    if (!this.checkUsername() && !this.checkEmail() && !this.checkPassword() && !this.checkConPwd() && this.terms) {
      const loginData = {
        "username": this.username,
        "email": this.email,
        "password": sha512(this.password + "")
      };
      console.log(loginData);
      this.http.register(loginData);
      this.router.navigate(['pages']);
    }
    else {
      if (!this.terms) {
        this.checkterms = true;
      }
    }
  }

}
