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

  text: string;

  constructor() {
    console.log('Hello HomeListComponent Component');
    this.text = 'Hello World';
  }

}
