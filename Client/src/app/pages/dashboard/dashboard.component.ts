
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

  constructor (private http: HttpService) {

  }

  ngOnInit() {
    Playground.CreateScene()
    setInterval(() => {
      this.seconds++
      if (this.seconds == 60) {
        this.minutes++
        this.seconds = 0
      }
      if (this.minutes == 60) {
        this.hours++
        this.minutes = 0
      }

    }, 1000);

    this.http.gameStart(5);
  }

  isOpen(): Boolean {
    return Playground.win
  }

  open(){
    Playground.win = !Playground.win
  }

}
