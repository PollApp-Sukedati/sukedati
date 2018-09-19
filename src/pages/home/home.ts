import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeStatusComponent } from "../../components/home-status/home-status";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
