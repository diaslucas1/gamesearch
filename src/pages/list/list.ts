import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IGames } from '../../interfaces/IGames';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  item:IGames;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('dados');
  }
}
