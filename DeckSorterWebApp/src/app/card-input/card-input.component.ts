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
  outData: any;
  constructor(private sortService: SortService) { }

  ngOnInit() {
    this.data = '2d,8s,Js,3c,Ac,4h,10h,Kh';
    this.outData = 'res';

  }

  sort() {
    this.cards = this.data.split(',');
    this.sortService.sortCards(this.cards).subscribe((res) => {
      this.outData = res;
    },
    (error: any) => {
      this.outData =  error;
      console.log(error);
    });
  }
}
