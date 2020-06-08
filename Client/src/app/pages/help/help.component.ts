import { Component } from '@angular/core';

@Component({
  selector: 'ngx-about',
  styleUrls: ['./help.component.scss'],
  templateUrl: './help.component.html',
})
export class HelpComponent {
  today: number = Date.now();
}
