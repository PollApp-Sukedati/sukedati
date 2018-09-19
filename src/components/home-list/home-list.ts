import { Component } from '@angular/core';

/**
 * Generated class for the HomeListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-list',
  templateUrl: 'home-list.html'
})
export class HomeListComponent {

  title: string;
  cards: Array<{title: string, team: string, dedline: number}>;

  constructor() {
    this.cards = [];
    for (let i = 1; i < 6; i++) {
      this.cards.push({
        title: 'title ' + i,
        team: 'P&D',
        dedline: i
      });
    }
  }

}
