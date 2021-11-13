import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private apiService: ApiService ) { }



  public sortCards(cards: string[]): Observable<any> {
    return this.apiService.post('deck/sort', cards).pipe(map((res) => res));
  }
}
