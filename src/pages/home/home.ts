import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IGames } from '../../interfaces/IGames';

import { GamesProvider } from '../../providers/games/games';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: IGames;

  constructor(public navCtrl: NavController, public gameProvider: GamesProvider) {
    this.gameProvider.allTeste().subscribe(res => {
      this.lista = res;
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}
