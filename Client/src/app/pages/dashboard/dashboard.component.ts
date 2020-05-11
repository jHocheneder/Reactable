import { Component } from '@angular/core';
import { Playground } from '../../playground';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent {
  title = 'Reactable';
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit() {
    Playground.CreateScene();
    setInterval(() => {
      this.seconds++;
      if (this.seconds == 60) {
        this.minutes++;
        this.seconds = 0;
      }
      if (this.minutes == 60) {
        this.hours++;
        this.minutes = 0;
      }
    }, 1000);
  }
}
