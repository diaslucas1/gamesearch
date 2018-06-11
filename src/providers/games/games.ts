import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGames } from '../../interfaces/IGames';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesProvider {

  items: string[];

  constructor(private db:AngularFireDatabase) {
    
  }

  allTeste(): Promise<any>{
    return this.db.database.ref("games").once("value")
      .then(function(snapshot) {        
      return snapshot.val();             
    });   
  }

}
