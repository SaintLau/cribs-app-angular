import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http: HttpClient) { }

  getAllCribs() {
    return this.http.get('data/cribs.json')
    .pipe(
      map(
        res => res)
        )
  }
}
