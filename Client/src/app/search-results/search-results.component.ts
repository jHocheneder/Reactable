import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public names: string[]
  private data: any;

  constructor(private router: ActivatedRoute, private http: HttpService, private rout: Router) {
    console.log('results')
   }

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => this.names = params.getAll('names'));
    console.log(this.names);
  }

  invitePlayer(name) {
    localStorage.setItem('multiplayer', 'true')
    this.http.invitePlayer(name)
    this.rout.navigate(['pages'])
  }

}
