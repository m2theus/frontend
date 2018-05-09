import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_API } from '../api.url';

/*
  Generated class for the ListProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProdutosProvider {

  constructor(public http: HttpClient) {

  }

  findAll() {
    return this.http.get(`${URL_API}/produto`);
  }

}
