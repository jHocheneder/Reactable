import { Component } from '@angular/core';
import { Playground } from './playground';
import { Profil } from './profil';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    profilClicked=false;
    title = 'Reactable';
    hours = 0;
    minutes = 0;
    seconds = 0;

    isProfile() {
        return this.profilClicked;
    }

    public onClose() {
        this.profilClicked=false;
    }

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