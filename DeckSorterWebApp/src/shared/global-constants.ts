import { HttpHeaders } from '@angular/common/http';

export const constants = {
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
     withCredentials: true
  },
  Ranks: [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  Suit: ['d', 's', 'c', 'h']
};
