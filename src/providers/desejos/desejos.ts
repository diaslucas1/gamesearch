import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

/*
  Generated class for the DesejosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DesejosProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello DesejosProvider Provider');
  }
  
  setStorage(chave,valor){
    this.storage.set(chave, valor);
  }

  getStorage(chave){
    return this.storage.get(chave);
  }

}
