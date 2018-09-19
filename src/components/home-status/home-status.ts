import { Component } from '@angular/core';

/**
 * Generated class for the HomeStatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-status',
  templateUrl: 'home-status.html'
})
export class HomeStatusComponent {

  text: string;

  constructor() {
    console.log('Hello HomeStatusComponent Component');
    this.text = 'Hello World';
  }

}
