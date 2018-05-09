import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from './../../providers/produto/produto'
import { ListProdutosProvider } from './../../providers/list-produtos/list-produtos';
import { ProdutosPage } from '../produtos/produtos';
/**
 * Generated class for the ListProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-produtos',
  templateUrl: 'list-produtos.html',
})
export class ListProdutosPage {

  listaProdutos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private listProdutoService: ListProdutosProvider,
     private ProdutoProvider: ProdutoProvider) {
  }

  ionViewDidLoad() {

    this.findAll();
    
  }

  openProduct(id: number) {
    this.navCtrl.push(ProdutosPage, {id: id});
  }

  findAll() {
    this.listProdutoService.findAll()
      .subscribe((response: any) => {
        this.listaProdutos = response;
      });
  }

onExcluirProduto(produto) {
    this.ProdutoProvider.delete(produto);
  }
  openProducts() {
    this.navCtrl.push(ProdutosPage);
  }

}
