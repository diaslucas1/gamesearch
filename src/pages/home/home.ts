import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { IGames } from '../../interfaces/IGames';

import { GamesProvider } from '../../providers/games/games';
import { ListPage } from '../list/list';
import { DesejosProvider } from '../../providers/desejos/desejos';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: IGames;
  desejos = [];
  items: string[];

  constructor(public navCtrl: NavController, public gameProvider: GamesProvider, public desejosProvider: DesejosProvider, private toast: ToastController) {
    this.lista = this.gameProvider.allTeste();
  }

  ionViewDidEnter(){
    this.desejosProvider.getStorage('desejos').then(res =>{
      if(res){
        this.desejos = res;
      }
    });
  }


 

  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //   this.gameProvider.allTeste();

  //   // set val to the value of the searchbar
  //   const val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter(item => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

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
