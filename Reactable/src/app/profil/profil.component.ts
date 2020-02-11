import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Profil } from '../profil';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  route: ActivatedRoute;
  benutzer: Profil = new Profil();
  id;
  constructor() { }

  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get('id');
    
    //alert(this.id);
    document.getElementById("Slogan").innerHTML = "your profil"
  }

  changeSlogan() {
    document.getElementById('Slogan').innerHTML = 'solve the puzzle';
  }


}

