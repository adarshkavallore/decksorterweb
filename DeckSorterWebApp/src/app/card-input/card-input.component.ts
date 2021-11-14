import { Component, OnInit } from '@angular/core';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  data: any;
  cards: any;
  sortedCards: any;
  success: boolean;
  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.data = '';

  }

  sort() {
    this.cards = this.data.split(',');
    this.sortService.sortCards(this.cards).subscribe((res) => {
      this.sortedCards = res;
      this.success = true;
    },
    (error: any) => {
      this.sortedCards =  error;
      this.success = false;
    });
  }
}
