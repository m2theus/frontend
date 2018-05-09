import { IncluirGruposPage } from './../incluir-grupos/incluir-grupos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoProvider } from '../../providers/grupo/grupo';


@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
  providers: [GrupoProvider]
})
export class GruposPage {
  grupos: string[];
  errorMessage: string;
  
  constructor(public navCtrl: NavController, public grupo: GrupoProvider) {

  }
  

  ionViewDidLoad() {
    this.getGrupos();
  }

  getGrupos() {
    this.grupo.getGrupos()
      .subscribe(
        grupos => this.grupos = grupos,
        error => this.errorMessage = <any>error);
  }

  onInsertGrupo(){
    this.navCtrl.push(IncluirGruposPage);
  }
  
  onExcluirGrupo(grupo) {
    this.grupo.deleteGroup(grupo);
  }
}
