import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  public invitation;

  constructor(private router: ActivatedRoute, private http: HttpService, private rout: Router) { }

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => this.invitation = params.getAll('invitation'));
    console.log(this.invitation[0]);
  }

}
