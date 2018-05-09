import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { URL_API } from '../api.url';

import { Response } from '@angular/http';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider {

  constructor(public http: HttpClient) {
  }

  findById(id: number) : Observable<any> {
    return this.http.get(`${URL_API}/produto/${id}`);
  }

  saveOrUpdate(nmProduto,dtCadastro,hrHoracadastro,vlProduto) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    var datetime = new Date(dtCadastro + ' ' + hrHoracadastro);
    var produto = {
      'nmProduto': nmProduto,
      'dtCadastro': datetime,
      'vlProduto': vlProduto
    };
    
    this.http.post('http://localhost:8080/rest/produto', produto)
      .subscribe(data => {
      }, error => {

        console.log(produto);
      });
  }

  delete(produto) {
    console.log(produto);
    this.http.delete('http://localhost:8080/rest/produto/' + produto)
      .subscribe(id => {

      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  findAllGroups() {
    return this.http.get(`${URL_API}/grupo`);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
