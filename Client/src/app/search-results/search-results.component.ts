import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private names: [any]
  private data: any;

  constructor(private router: ActivatedRoute) {
    console.log('results')
   }

  ngOnInit() {
    this.data = this.router.params.subscribe(params => {
      this.names = params['names'];
    })
    console.log(this.names);
    console.log(this.data);
  }

}
