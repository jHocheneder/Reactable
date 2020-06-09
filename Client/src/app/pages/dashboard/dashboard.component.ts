
import { Component } from '@angular/core';
import { Playground } from '../../playground';
import { HttpService } from '../../services/http.service';

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
  counter

  constructor(private http: HttpService) {

  }


  ngOnInit() {
    if(!this.started){
      this.start()
      this.started = true
    }
  }

  start() {
    Playground.CreateScene(this.http)
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
    Playground.CreateScene(this.http)
    this.start()
    console.log(Playground.win)
  }

  ngOnDestroy() {
    clearInterval(this.counter)
  }

}
