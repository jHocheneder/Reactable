import { Component } from '@angular/core';
import { Playground } from './playground';
import * as BABYLON from '@babylonjs/core/Legacy/legacy';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Reactable';

    ngOnInit() {
        Playground.CreateScene();
    }

}