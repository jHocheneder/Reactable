import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('Slogan').innerHTML = 'change Mode';
  }
  changeSlogan() {
    document.getElementById('Slogan').innerHTML = 'solve the puzzle';
  }
}
