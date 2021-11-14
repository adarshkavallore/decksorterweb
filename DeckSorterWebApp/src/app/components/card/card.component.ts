import { Component, OnInit } from '@angular/core';
import { constants } from 'src/shared/global-constants';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  input: string;
  cards: any[];
  errorMessage: any;
  validInputCards: any[];
  sortedCards: any[];
  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.input = '';
    this.validInputCards = [];
    this.clearResultContent();

  }
  isInputValid(): boolean {
    this.validInputCards = [];

    if (this.input === '') {
      return false;
    }
    this.cards = this.input.split(',');
    this.cards = this.cards.filter(x => x !== '');
    let isValid = this.cards.length > 1;
    this.cards.forEach (x => {
        if ( !this.isvalidCard(x)) {
          this.clearResultContent();
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
  clearResultContent() {
    this.sortedCards = [];
    this.errorMessage = undefined;
  }
  sort() {
    this.sortService.sortCards(this.validInputCards).subscribe((res) => {
      this.sortedCards = res;
      this.errorMessage = undefined;
    },
    (error: any) => {
      this.sortedCards =  [];
      this.errorMessage = error;
    });
  }
}
