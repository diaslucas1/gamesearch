import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IGames } from '../../interfaces/IGames';

import { GamesProvider } from '../../providers/games/games';
import { ListPage } from '../list/list';
import { DesejosProvider } from '../../providers/desejos/desejos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: IGames;
  desejos = [];

  constructor(public navCtrl: NavController, public gameProvider: GamesProvider, public desejosProvider: DesejosProvider) {
    
  }

  ionViewDidEnter(){
    this.gameProvider.allTeste().subscribe(res => {
      this.lista = res;
    }, erro => {
      console.log("Erro: " + erro.message);
    });

    this.desejosProvider.getStorage('desejos').then(res =>{
      if(res){
        this.desejos = res;
      }
    });


  }

  abreDesejos(item){
    this.navCtrl.push(ListPage, {dados:item});
  }

  addDesejos(item){
    for(let game of this.desejos){
      if(game.app_name == item.app_name){
        return;
      }
    }

    this.desejos.push(item);
    this.desejosProvider.setStorage('desejos',this.desejos);
  }

}
