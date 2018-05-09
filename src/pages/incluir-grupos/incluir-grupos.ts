import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoProvider } from '../../providers/grupo/grupo';

/**
 * Generated class for the IncluirGruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incluir-grupos',
  templateUrl: 'incluir-grupos.html',
  providers: [GrupoProvider]
})
export class IncluirGruposPage {
  results: Array<any>;
  public grupo = {
    nmGrupo: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public grupodata: GrupoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncluirGruposPage');
  }

  onSalvarGrupo(){
    this.grupodata.InsertGrupo(this.grupo);
  }
  onExcluirGrupo() {
    console.log(this.grupo);
    this.grupodata.deleteGroup(this.grupo);
  }

 
}
