import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGames } from '../../interfaces/IGames';

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GamesProvider Provider');
  }

  allTeste(){
    return this.http.get<IGames>('http://localhost:3000/games');
  }

}
