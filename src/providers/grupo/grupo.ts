import { URL_API } from './../api.url';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
Generated class for the RestProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
@Injectable()
export class GrupoProvider {
  private apiUrl = 'http://localhost:8080/rest/grupo';

  constructor(public http: Http) {
    console.log('Hello GrupoProvider Provider');
  }

  getGrupos(): Observable<string[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  InsertGrupo(nmGrupo) {

    // this.http.post('http://slimapp/students/add', data)
    this.http.post('http://localhost:8080/rest/grupo', nmGrupo)
      .subscribe(data => {
      }, error => {
  
        console.log(JSON.stringify(error.json()));
      });
  }

  deleteGroup(nmGrupo) {
    // this.http.delete('http://slimapp/students/delete/' + id)
    console.log(nmGrupo);
    this.http.delete('http://localhost:8080/rest/grupo/' + nmGrupo)
      .subscribe(id => {

      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  findAllGroups() {
    return this.http.get(`${URL_API}/groups`);
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