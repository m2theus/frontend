webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n  <button ion-button menuToggle primary>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Desafio</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GruposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__incluir_grupos_incluir_grupos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_grupo_grupo__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GruposPage = /** @class */ (function () {
    function GruposPage(navCtrl, grupo) {
        this.navCtrl = navCtrl;
        this.grupo = grupo;
    }
    GruposPage.prototype.ionViewDidLoad = function () {
        this.getGrupos();
    };
    GruposPage.prototype.getGrupos = function () {
        var _this = this;
        this.grupo.getGrupos()
            .subscribe(function (grupos) { return _this.grupos = grupos; }, function (error) { return _this.errorMessage = error; });
    };
    GruposPage.prototype.onInsertGrupo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__incluir_grupos_incluir_grupos__["a" /* IncluirGruposPage */]);
    };
    GruposPage.prototype.onExcluirGrupo = function (grupo) {
        this.grupo.deleteGroup(grupo);
    };
    GruposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-grupos',template:/*ion-inline-start:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\grupos\grupos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle primary>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Grupos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <div *ngFor="let g of grupos">\n    <button ion-item >\n      {{g.nmGrupo}}\n    </button>\n    <button (click)="onExcluirGrupo(g.id_grupo)" ion-button full color="danger">\n      <ion-icon name="trash"></ion-icon>\n    </button>\n   \n    </div>\n  </ion-list>\n</ion-content>\n<ion-footer>\n<button (click)="onInsertGrupo()" ion-button full color="primary" >Incluir Grupo</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\grupos\grupos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_grupo_grupo__["a" /* GrupoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_grupo_grupo__["a" /* GrupoProvider */]])
    ], GruposPage);
    return GruposPage;
}());

//# sourceMappingURL=grupos.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncluirGruposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IncluirGruposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncluirGruposPage = /** @class */ (function () {
    function IncluirGruposPage(navCtrl, navParams, grupodata) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.grupodata = grupodata;
        this.grupo = {
            nmGrupo: ""
        };
    }
    IncluirGruposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncluirGruposPage');
    };
    IncluirGruposPage.prototype.onSalvarGrupo = function () {
        this.grupodata.InsertGrupo(this.grupo);
    };
    IncluirGruposPage.prototype.onExcluirGrupo = function () {
        console.log(this.grupo);
        this.grupodata.deleteGroup(this.grupo);
    };
    IncluirGruposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incluir-grupos',template:/*ion-inline-start:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\incluir-grupos\incluir-grupos.html"*/'<!--\n  Generated template for the IncluirGruposPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar> \n    <ion-title>Grupos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item>\n  <ion-label floating>Nome do Grupo</ion-label>\n  <ion-input type="text" [(ngModel)]="grupo.nmGrupo" name="grupo"></ion-input>\n</ion-item>\n</ion-content>\n<ion-footer>\n    <ion-buttons start>\n      <button (click)="onSalvarGrupo()" ion-button full color="primary">Incluir Grupo</button>\n    </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\incluir-grupos\incluir-grupos.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__["a" /* GrupoProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__["a" /* GrupoProvider */]])
    ], IncluirGruposPage);
    return IncluirGruposPage;
}());

//# sourceMappingURL=incluir-grupos.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_list_produtos_list_produtos__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__produtos_produtos__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListProdutosPage = /** @class */ (function () {
    function ListProdutosPage(navCtrl, navParams, listProdutoService, ProdutoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listProdutoService = listProdutoService;
        this.ProdutoProvider = ProdutoProvider;
    }
    ListProdutosPage.prototype.ionViewDidLoad = function () {
        this.findAll();
    };
    ListProdutosPage.prototype.openProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produtos_produtos__["a" /* ProdutosPage */], { id: id });
    };
    ListProdutosPage.prototype.findAll = function () {
        var _this = this;
        this.listProdutoService.findAll()
            .subscribe(function (response) {
            _this.listaProdutos = response;
        });
    };
    ListProdutosPage.prototype.onExcluirProduto = function (produto) {
        this.ProdutoProvider.delete(produto);
    };
    ListProdutosPage.prototype.openProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__produtos_produtos__["a" /* ProdutosPage */]);
    };
    ListProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-produtos',template:/*ion-inline-start:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\list-produtos\list-produtos.html"*/'<!--\n  Generated template for the ListProdutosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle primary>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n  <div *ngFor="let item of listaProdutos">\n    <button ion-item >\n      {{item.nmProduto}}\n    </button>\n    <button (click)="onExcluirProduto(item.idProduto)" ion-button full color="danger">\n      <ion-icon name="trash"></ion-icon>\n    </button>\n    </div>\n  </ion-list>\n\n  <ion-footer>\n    <button ion-button block (click)="openProducts()">Incluir novo</button>\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\list-produtos\list-produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_list_produtos_list_produtos__["a" /* ListProdutosProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__["a" /* ProdutoProvider */]])
    ], ListProdutosPage);
    return ListProdutosPage;
}());

//# sourceMappingURL=list-produtos.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_grupo_grupo__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutosPage = /** @class */ (function () {
    function ProdutosPage(navCtrl, navParams, produtoProvider, groupProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoProvider = produtoProvider;
        this.groupProvider = groupProvider;
        this.produto = {
            nmProduto: "",
            dtCadastro: "",
            hrHoracadastro: "",
            vlProduto: 0
        };
    }
    ProdutosPage_1 = ProdutosPage;
    ProdutosPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('id')) {
            this.idProduto = this.navParams.get('id');
            this.findById(this.idProduto);
        }
        this.findAllGroups();
    };
    ProdutosPage.prototype.findById = function (id) {
        var _this = this;
        this.produtoProvider.findById(id)
            .subscribe(function (response) {
            console.log(response);
            _this.produto = response;
        });
    };
    ProdutosPage.prototype.register = function () {
        this.produtoProvider.saveOrUpdate(this.produto.nmProduto, this.produto.dtCadastro, this.produto.hrHoracadastro, this.produto.vlProduto);
    };
    ProdutosPage.prototype.delete = function () {
        this.produtoProvider.delete(this.produto);
        this.navCtrl.push(ProdutosPage_1);
    };
    ProdutosPage.prototype.findAllGroups = function () {
        var _this = this;
        this.produtoProvider.findAllGroups()
            .subscribe(function (response) {
            _this.groups = response;
            console.log(response);
        });
    };
    ProdutosPage = ProdutosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produtos',template:/*ion-inline-start:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\produtos\produtos.html"*/'<!--\n  Generated template for the ProdutosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle primary>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{produto?.nmProduto || "Novo Produto"}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <!--  -->\n    <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" name="grupo" [(ngModel)]="produto.nmProduto"></ion-input>\n    </ion-item>\n\n  <ion-item>\n    <ion-label>Data</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="produto.dtCadastro"></ion-datetime>\n  </ion-item>\n\n   <ion-item>\n    <ion-label>Hora</ion-label>\n    <ion-datetime displayFormat="HH:mm" [(ngModel)]="produto.hrHoracadastro"></ion-datetime>\n  </ion-item>\n\n    <!-- [(ngModel)]="produto.vl_produto" -->\n    <ion-item>\n      <ion-label floating>Valor</ion-label>\n      <ion-input type="text" name="grupo" [(ngModel)]="produto.vlProduto"></ion-input>\n    </ion-item>\n   <ion-footer>\n    <ion-buttons start>\n      <button (click)="register()" ion-button full color="primary">Incluir Produto</button>\n      \n    </ion-buttons>\n</ion-footer>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\pages\produtos\produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_grupo_grupo__["a" /* GrupoProvider */]])
    ], ProdutosPage);
    return ProdutosPage;
    var ProdutosPage_1;
}());

//# sourceMappingURL=produtos.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/grupos/grupos.module": [
		288,
		4
	],
	"../pages/home/home.module": [
		289,
		3
	],
	"../pages/incluir-grupos/incluir-grupos.module": [
		290,
		2
	],
	"../pages/list-produtos/list-produtos.module": [
		291,
		1
	],
	"../pages/produtos/produtos.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProdutosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ListProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ListProdutosProvider = /** @class */ (function () {
    function ListProdutosProvider(http) {
        this.http = http;
    }
    ListProdutosProvider.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_url__["a" /* URL_API */] + "/produto");
    };
    ListProdutosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ListProdutosProvider);
    return ListProdutosProvider;
}());

//# sourceMappingURL=list-produtos.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_grupo_grupo__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_incluir_grupos_incluir_grupos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_produtos_produtos__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_grupos_grupos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_list_produtos_list_produtos__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_produtos_list_produtos__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_produto_produto__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_grupos_grupos__["a" /* GruposPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_produtos_produtos__["a" /* ProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_incluir_grupos_incluir_grupos__["a" /* IncluirGruposPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_produtos_list_produtos__["a" /* ListProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/grupos/grupos.module#GruposPageModule', name: 'GruposPage', segment: 'grupos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incluir-grupos/incluir-grupos.module#IncluirGruposPageModule', name: 'IncluirGruposPage', segment: 'incluir-grupos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-produtos/list-produtos.module#ListProdutosPageModule', name: 'ListProdutosPage', segment: 'list-produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos/produtos.module#ProdutosPageModule', name: 'ProdutosPage', segment: 'produtos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_grupos_grupos__["a" /* GruposPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_produtos_produtos__["a" /* ProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_incluir_grupos_incluir_grupos__["a" /* IncluirGruposPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_produtos_list_produtos__["a" /* ListProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_1__providers_grupo_grupo__["a" /* GrupoProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_list_produtos_list_produtos__["a" /* ListProdutosProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_produto_produto__["a" /* ProdutoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_grupos_grupos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_produtos_list_produtos__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Grupos', component: __WEBPACK_IMPORTED_MODULE_5__pages_grupos_grupos__["a" /* GruposPage */] },
            { title: 'Produtos', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_produtos_list_produtos__["a" /* ListProdutosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\app\app.html"*/'<ion-menu primary [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Administrador.MATHEUS\Downloads\kepha-matheus-master (1)\kepha-matheus-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_url__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
Generated class for the RestProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
*/
var GrupoProvider = /** @class */ (function () {
    function GrupoProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/rest/grupo';
        console.log('Hello GrupoProvider Provider');
    }
    GrupoProvider.prototype.getGrupos = function () {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GrupoProvider.prototype.InsertGrupo = function (nmGrupo) {
        // this.http.post('http://slimapp/students/add', data)
        this.http.post('http://localhost:8080/rest/grupo', nmGrupo)
            .subscribe(function (data) {
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    GrupoProvider.prototype.deleteGroup = function (nmGrupo) {
        // this.http.delete('http://slimapp/students/delete/' + id)
        console.log(nmGrupo);
        this.http.delete('http://localhost:8080/rest/grupo/' + nmGrupo)
            .subscribe(function (id) {
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    GrupoProvider.prototype.findAllGroups = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__api_url__["a" /* URL_API */] + "/groups");
    };
    GrupoProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    GrupoProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    GrupoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GrupoProvider);
    return GrupoProvider;
}());

//# sourceMappingURL=grupo.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_API; });
var URL_API = 'http://localhost:8080/rest';
//# sourceMappingURL=api.url.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_url__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutoProvider = /** @class */ (function () {
    function ProdutoProvider(http) {
        this.http = http;
    }
    ProdutoProvider.prototype.findById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__api_url__["a" /* URL_API */] + "/produto/" + id);
    };
    ProdutoProvider.prototype.saveOrUpdate = function (nmProduto, dtCadastro, hrHoracadastro, vlProduto) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var datetime = new Date(dtCadastro + ' ' + hrHoracadastro);
        var produto = {
            'nmProduto': nmProduto,
            'dtCadastro': datetime,
            'vlProduto': vlProduto
        };
        this.http.post('http://localhost:8080/rest/produto', produto)
            .subscribe(function (data) {
        }, function (error) {
            console.log(produto);
        });
    };
    ProdutoProvider.prototype.delete = function (produto) {
        console.log(produto);
        this.http.delete('http://localhost:8080/rest/produto/' + produto)
            .subscribe(function (id) {
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    ProdutoProvider.prototype.findAllGroups = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__api_url__["a" /* URL_API */] + "/grupo");
    };
    ProdutoProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProdutoProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}());

//# sourceMappingURL=produto.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map