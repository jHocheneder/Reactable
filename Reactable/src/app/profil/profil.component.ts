import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Profil } from '../profil';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  route: ActivatedRoute;
  benutzer: Profil = new Profil();
  id;
  registriert: Boolean = true;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');

    // alert(this.id);

    document.getElementById('Slogan').innerHTML = this.dataService.angemeldet ? 'your profile' : this.registriert ? 'login' : 'sign in';
  }

  changeSlogan() {
    document.getElementById('Slogan').innerHTML = 'solve the puzzle';
  }

  switchLoginReg() {
    document.getElementById('Slogan').innerHTML = this.registriert ? 'login' : 'sign in';
  }

}

