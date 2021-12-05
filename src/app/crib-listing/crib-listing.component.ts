import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CribsService } from '../services/cribs.service';
import { map } from 'rxjs/operators';
import { Crib } from '../crib';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<Crib> = [];
  error: string;

  constructor(
    private http: HttpClient, 
    private cribsService: CribsService
    ) { }

  ngOnInit(): void {
      this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText 
      );
    }
}
