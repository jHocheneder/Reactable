import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Profil } from '../profil';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

//  @Input() benutzer: Profil = new Profil();
//  @Output() schliessen: EventEmitter<Profil> = new EventEmitter<Profil>();

  benutzer: Profil = new Profil();

  constructor() { }

  ngOnInit() {
  }

 /* onSchliessen() {
    console.log("emit");
    this.schliessen.emit(this.benutzer);
  }*/

}

