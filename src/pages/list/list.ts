import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IGames } from '../../interfaces/IGames';

import { DesejosProvider } from '../../providers/desejos/desejos';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  desejos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public desejosProvider:DesejosProvider) {
    
  }

  ionViewDidEnter(){
    this.desejosProvider.getStorage('desejos').then(res =>{
      if(res){
        this.desejos = res;
      }
    })
  
  }
}
