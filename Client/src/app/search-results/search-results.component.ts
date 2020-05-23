import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private names: string[]
  private data: any;

  constructor(private router: ActivatedRoute) {
    console.log('results')
   }

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => this.names = params.getAll('names'));

    console.log(this.names);
  }

}
