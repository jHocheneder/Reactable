import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Invitation } from '../invitation';

@Component({
  selector: 'invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  public names;
  public rooms;
  public gameId;

  private invitations: Array<Invitation> = new Array<Invitation>();

  constructor(private router: ActivatedRoute, private http: HttpService, private rout: Router) { }

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => this.names = params.getAll('names'));
    this.router.queryParamMap.subscribe(params => this.rooms = params.getAll('rooms'));
    this.router.queryParamMap.subscribe(params => this.gameId = params.getAll('gameId'));
    console.log(this.names[1]);
    console.log(this.rooms[1]);
    console.log(this.gameId[1])

    for(let i = 0; i<this.rooms.length; i++){
      let inv = {
        "username":  this.names[i],
        "room": this.rooms[i],
        "gameId": this.gameId[i]
      };

      this.invitations.push(inv);
    }
  }

  accept(room: string, gameId: string){
    localStorage.setItem('multiplayer', 'true')
    localStorage.setItem('gameId', gameId)
    this.http.connectGame(room);
    this.rout.navigate(['pages']);
  }

}
