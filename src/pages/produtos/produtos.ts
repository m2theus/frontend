import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from './../../providers/produto/produto'
import { GrupoProvider } from '../../providers/grupo/grupo';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  
  idProduto: number;
  dt_completa: String;
  groups: Array<any>;

  public produto = {
    nmProduto: "",
    dtCadastro: "",
    hrHoracadastro:"",
    vlProduto:0
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private produtoProvider: ProdutoProvider,
    private groupProvider: GrupoProvider) {
  }

  ionViewDidLoad() {

    if(this.navParams.get('id')) {
      this.idProduto = this.navParams.get('id');
      this.findById(this.idProduto);
    }

    this.findAllGroups();

  }

  findById(id: number) {
    this.produtoProvider.findById(id)
      .subscribe((response: any) => {
        console.log(response);
        this.produto = response;
      });
  }

  register() {
   
    this.produtoProvider.saveOrUpdate(this.produto.nmProduto, this.produto.dtCadastro, this.produto.hrHoracadastro, this.produto.vlProduto);
  }

  delete() {
    this.produtoProvider.delete(this.produto);
    this.navCtrl.push(ProdutosPage);
  }

  findAllGroups() {
    this.produtoProvider.findAllGroups()
      .subscribe((response: any) => {
        this.groups = response;
        console.log(response);
      });
  }

}
