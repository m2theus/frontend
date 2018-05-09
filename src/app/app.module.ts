import { HomePage } from './../pages/home/home';
import { GrupoProvider } from './../providers/grupo/grupo';
import { StatusBar } from '@ionic-native/status-bar';
import { IncluirGruposPage } from './../pages/incluir-grupos/incluir-grupos';
import { ProdutosPage } from './../pages/produtos/produtos';
import { GruposPage } from './../pages/grupos/grupos';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgModule, ErrorHandler } from '@angular/core';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListProdutosProvider } from '../providers/list-produtos/list-produtos';
import { ListProdutosPage } from '../pages/list-produtos/list-produtos';
import { ProdutoProvider } from '../providers/produto/produto';

@NgModule({
  declarations: [
    MyApp,
    GruposPage,
    ProdutosPage,
    IncluirGruposPage,
    ListProdutosPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GruposPage,
    ProdutosPage,
    IncluirGruposPage,
    ListProdutosPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GrupoProvider,
    ListProdutosProvider,
    ProdutoProvider
  ]
})
export class AppModule {}
