import { Component } from '@angular/core';
import { Playground } from './playground';
import { Profil } from './profil';

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
    benutzer:Profil = new Profil();

    ngOnInit() {
        this.benutzer.id = 0;
        document.getElementById("Slogan").innerHTML = "solve the puzzle"
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