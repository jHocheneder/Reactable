import { Component } from '@angular/core';
import { Playground } from './playground';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import { Time } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Reactable';
    hours = 0;
    minutes = 0;
    seconds = 0;

    ngOnInit() {
        Playground.CreateScene();
        setInterval(()=> {
            this.seconds++;
            if(this.seconds == 60) {
                this.minutes++;
                this.seconds = 0;
            }
            if(this.minutes == 60) {
                this.hours++;
                this.minutes = 0;
            }
        }, 1000);
    }

}