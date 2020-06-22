
import { Component } from '@angular/core';
import { Playground } from '../../playground';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';
import { throws } from 'assert';
import { throwIfAlreadyLoaded } from '../../@core/module-import-guard';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent {
  title = 'Reactable'
  hours = 0
  minutes = 0
  seconds = 0
  started = false
  counter : NodeJS.Timer

  verloren = false;

  countdown = 'Connecting...'

  constructor(private http: HttpService, private data: DataService) {

  }

  ngOnInit() {
    if(!this.started){
      this.start()
      this.started = true
    }

    this.http.countdown().subscribe((msg) => {
      if(msg == 'Go') {
        console.log(msg)
        this.countdown = msg
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        Playground.hours = 0
        Playground.minutes = 0
        Playground.seconds = 0
      } else {
        console.log(msg)
        this.countdown = msg
      }
    })

    this.http.multiplayerGameEnd().subscribe((msg) => {
      console.log(msg)
      this.verloren = true;
      clearInterval(this.counter);
    })
  }

  exitverloren(){
    this.verloren = false;
  }

  start() {
    Playground.CreateScene(this.http, this.data)
    this.counter = setInterval(() => {
      if (Playground.win) {
        clearInterval(this.counter)
      }
      Playground.seconds++
      if (Playground.seconds == 60) {
        Playground.minutes++
        Playground.seconds = 0
      }
      if (Playground.minutes == 60) {
        Playground.hours++
        Playground.minutes = 0
      }
      this.hours = Playground.hours
      this.minutes = Playground.minutes
      this.seconds = Playground.seconds
    }, 1000);

    if (localStorage.getItem('username') != null) {
      this.http.gameStart(localStorage.getItem('userId'));
    }
  }
  isOpen(): Boolean {
    return Playground.win
  }

  close() {
    Playground.win = false
    Playground.hours = 0
    Playground.minutes = 0
    Playground.seconds = 0
    Playground.CreateScene(this.http, this.data)
    this.start()
    console.log(Playground.win)
  }

  ngOnDestroy() {
    clearInterval(this.counter)
  }

  multiplayer(){
    if(localStorage.getItem('multiplayer')=='true'){
      if(this.countdown == 'Go'){
        return false;
      }
      return true;
    }
    return false;
  }

}
