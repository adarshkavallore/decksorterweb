import { Component, OnChanges, OnInit } from '@angular/core';
import { constants } from 'src/shared/global-constants';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  input: string;
  cards: any[];
  errorMessage: any;
  validInputCards: any[];
  sortedCards: any[];
  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.input = '';
    this.validInputCards = [];
    this.sortedCards = [];
    this.errorMessage = undefined;

  }
  isInputValid(): boolean {
    this.validInputCards = [];

    if (this.input === '') {
      return false;
    }
    this.cards = this.input.split(',');
    this.cards = this.cards.filter(x => x !== '');
    let isValid = true;
    this.cards.forEach (x => {
        if ( !this.isvalidCard(x)) {
          this.sortedCards = [];
          isValid =  false;
        } else {

          this.validInputCards.push(x);
        }
      });
    return isValid;
}
isvalidCard(c: string) {
  if (c.length === 2 && constants.Ranks.includes(c[0]) && constants.Suit.includes(c[1])) {
    return true;
  }
  if (c.length === 3 && c.substring(0, 2) === '10' && constants.Suit.includes(c[2])) {
    return true;
  }
  return false;
}
  sort() {
    this.sortService.sortCards(this.validInputCards).subscribe((res) => {
      this.sortedCards = res;
      console.log('sssss', this.sortedCards.length);
      this.errorMessage = undefined;
    },
    (error: any) => {
      this.sortedCards =  [];
      this.errorMessage = error;
      console.log('ss', this.errorMessage);
    });
  }
}
