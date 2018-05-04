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

  deletarTudo(){
    this.desejos = [];
    this.desejosProvider.setStorage('desejos',this.desejos);
  }

  deletarItem(game){
    let novaLista = [];
    for(let item of this.desejos){
      if(item.app_name != game.app_name){
        novaLista.push(item);
      }
    }
    this.desejos = novaLista;
    this.desejosProvider.setStorage('desejos',this.desejos);
  }
}
