webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-div{\r\n}\r\n\r\n#title-div{\r\n    width: 100%;\r\n    min-height : 40px;\r\n    max-height: 40px;\r\n    margin-top: -10px;\r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n    background-color: rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n#app-title{\r\n    font-family: \"Courier New\", Monospace;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: xx-large;\r\n    margin-top: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Il contenitore più esterno - usato per impostare le regole css più generali -->\n<div id=\"main-div\">\n  <div id=\"title-div\">\n    <h1 id=app-title>\n      Conway's Game of Life\n    </h1>\n  </div>\n\n  <app-game-board></app-game-board>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'GameOfLife';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/Components/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CellComponent = (function () {
    function CellComponent() {
        this.colour = 'rgba(235, 235, 235, 0.5)';
        this.living = false;
        this.age = 0;
        this.neighborhood = [];
        this.willBeAlive = false;
        this.trackAging = false;
    }
    CellComponent.prototype.clicked = function () {
        this.toggleStatus();
        this.updateColour();
    };
    CellComponent.prototype.updateStatusAs_Alive = function (num) {
        if (num < 2 || num > 3) {
            this.willBeAlive = false;
        }
        else {
            this.willBeAlive = true;
        }
    };
    CellComponent.prototype.updateStausAs_Dead = function (num) {
        if (num === 3) {
            this.willBeAlive = true;
        }
    };
    CellComponent.prototype.setPosition = function (position) {
        this.position = position;
    };
    CellComponent.prototype.getPosition = function () {
        return this.position;
    };
    CellComponent.prototype.getStatus = function () {
        return this.living;
    };
    CellComponent.prototype.setStatus = function (newStatus) {
        this.living = newStatus;
    };
    CellComponent.prototype.toggleStatus = function () {
        this.living = !this.living;
    };
    CellComponent.prototype.getColour = function () {
        return this.colour;
    };
    CellComponent.prototype.setTrackAge = function (track) {
        this.trackAging = track;
    };
    CellComponent.prototype.reset = function () {
        this.resetColour();
        this.willBeAlive = false;
        this.living = false;
        this.age = 0;
    };
    CellComponent.prototype.resetColour = function () {
        this.colour = 'rgba(235, 235, 235, 0.5)';
    };
    CellComponent.prototype.updateColour = function () {
        if (this.living) {
            if (this.trackAging) {
                this.colour = this.ageColour();
            }
            else {
                this.colour = '#ff9933';
            }
        }
        else {
            this.resetColour();
        }
    };
    CellComponent.prototype.addNeighbour = function (cell) {
        this.neighborhood.push(cell);
    };
    CellComponent.prototype.isAlive = function () {
        return this.living;
    };
    // scorre tutte le celle del vicinato della cella e conta in quante sono Alive
    CellComponent.prototype.countAliveNeighbours = function () {
        var num = 0;
        this.neighborhood.forEach(function (cell) {
            if (cell.isAlive()) {
                num++;
            }
        });
        return num;
    };
    // imposta il valore della variabile willBeAlive, che determina se la cella sarà Alive anche la prossima generazione
    CellComponent.prototype.nextGeneration = function () {
        var aliveNeighbours = this.countAliveNeighbours();
        if (this.living) {
            this.updateStatusAs_Alive(aliveNeighbours);
        }
        else {
            this.updateStausAs_Dead(aliveNeighbours);
        }
    };
    // applica la nuova generazione alla cella e ne aggiorna età e colore
    CellComponent.prototype.applyGeneration = function () {
        this.living = this.willBeAlive;
        this.updateColour();
        if (this.living) {
            this.age++;
        }
        else {
            this.age = 0;
        }
    };
    CellComponent.prototype.ageColour = function () {
        var percent = (this.age) * 5;
        if (percent >= 100) {
            return 'hsl(-100, 100%, 20%)';
        }
        var startHue = 130, endHue = 0;
        var startLum = 60, endLum = 20;
        var a = percent / 100, b = Math.abs(endHue - startHue) * a, c = startHue - 100 - b;
        var d = Math.abs(endLum - startLum) * a, e = startLum - d;
        return 'hsl(' + c + ', 100%, ' + e + '%)';
    };
    return CellComponent;
}());
CellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-cell-component',
        template: ''
    })
    // Questa classe rappresenta la singola cella della griglia, contiene tutti gli attributi che codificano lo stato attuale della cella
    // contiene anche le funzioni necessarie a calcolare lo stato della cella nella generazione successiva e ad applicare tale stato
    ,
    __metadata("design:paramtypes", [])
], CellComponent);

//# sourceMappingURL=cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/game-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#game-wrapper{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.wrapper-div{\r\n    margin-top:20px;\r\n}\r\n\r\n#settings-panel{\r\n    background-color:rgba(255, 255, 255, 0.25);  \r\n    padding: 20px;\r\n    max-height: -webkit-max-content;\r\n    max-height: -moz-max-content;\r\n    max-height: max-content;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 4 300px;\r\n            flex: 0 4 300px;\r\n    margin-top: 10%;\r\n    margin-left: 50px;\r\n    position: relative;\r\n}\r\n\r\n#action-panel{\r\n    background-color:rgba(255, 255, 255, 0.25);  \r\n    padding: 20px;\r\n    max-height: 200px;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 4 300px;\r\n            flex: 0 4 300px;\r\n    margin-top: 10%;\r\n    margin-right: 50px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n#game-grid-socket{\r\n    -webkit-box-flex: 5;\r\n        -ms-flex: 5 0 ;\r\n            flex: 5 0 ;\r\n}\r\n\r\n.wrapper-div{\r\n    position: relative;\r\n}\r\n.info {\r\n    position: absolute;\r\n    top:-100px;\r\n    left: 50px;\r\n}\r\n\r\n.button { /* Safari */\r\n    transition-duration: 0.6s;\r\n    background-color:rgba(255, 255, 255, 0.486); \r\n    width: 150px;\r\n    height: 60px;\r\n    border: 1.5px solid black !important;\r\n    color: black;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.button:hover{\r\n    background-color: rgb(231, 231, 231);\r\n}\r\n\r\n.settings-label{\r\n        font-family: \"Courier New\", Monospace;\r\n        text-align: center;\r\n        color: rgb(231, 231, 231);\r\n        font-weight: bolder;\r\n        font-size: large;\r\n        margin-top: 2px;\r\n}\r\n\r\n.setting-container{\r\n    margin-top:20px;\r\n    margin-bottom:40px;\r\n\r\n}\r\n\r\n.container-big{\r\n    margin-bottom:60px !important;\r\n}\r\n\r\n.slidecontainer {\r\n    width: 100%; \r\n}\r\n\r\n.checkbox-custom{\r\n    -webkit-appearance: none; \r\n    opacity: 1;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 5px;\r\n    cursor: pointer;\r\n    content: '';\r\n    background: rgba(255, 255, 255, 0.486);\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 20px;\r\n    height: 20px;\r\n    padding: 2px;\r\n    \r\n    margin-right: 10px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.checkbox-custom:checked{\r\n    background: rgb(78, 133, 236); \r\n    box-shadow: inset 0px 0px 0px 4px #fff;\r\n}\r\n.checkbox-custom:hover{\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n\r\n\r\n\r\n.slider {\r\n    direction: rtl;\r\n    -webkit-appearance: none; \r\n    width: 100%; \r\n    height: 20px; \r\n    background: rgba(255, 255, 255, 0.486);\r\n    outline: none; \r\n    opacity: 0.7; \r\n    transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n    background: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;  \r\n    appearance: none;\r\n    width: 25px;  \r\n    height: 25px;  \r\n    background: rgb(78, 133, 236); \r\n    cursor: pointer; \r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px;  \r\n    height: 25px; \r\n    background: rgb(78, 133, 236);  \r\n    cursor: pointer; \r\n}\r\n.slider::-webkit-slider-thumb:hover{\r\n    zoom: 1.15;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\r\n}\r\n\r\n.slider::-moz-range-thumb:hover{\r\n    zoom: 1.15;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\r\n}\r\n\r\n#dropdown-container{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n#dropbtn-left, #dropbtn-right  {\r\n    border: none;\r\n    \r\n}\r\n\r\n#dropdown-content-left {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: rgba(255, 255, 255, 0.486);\r\n    min-width: 150px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\r\n    z-index: 1;\r\n    left: 15;\r\n}\r\n#dropdown-content-right{\r\n    display: none;\r\n    position: absolute;\r\n    background-color: rgba(255, 255, 255, 0.486);\r\n    min-width: 150px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);\r\n    z-index: 1;\r\n    right: 15;\r\n}\r\n\r\n\r\n.menu-button{\r\n    background-color:rgba(255, 255, 255, 0.286); \r\n    color: black;\r\n    padding: 12px 0px;\r\n    width:100%;\r\n    border:none;\r\n    border-bottom: solid, 1px, black !important;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: block;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\r\n\r\n#drops{\r\n    position: absolute;\r\n    left:0;\r\n}\r\n\r\n.menu-button:hover{\r\n    background-color: white;\r\n}\r\n\r\n\r\n#drops-left:hover #dropdown-content-left  {\r\n    display: block;\r\n}\r\n\r\n#drops-right:hover #dropdown-content-right  {\r\n    display: block;\r\n}\r\n\r\n\r\n.dropdown:hover #dropbtn-left #dropbtn-right {\r\n    background-color: rgb(231, 231, 231);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/game-board.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Contenitore di tutte le strutture principali della schermata di gioco -->\r\n\r\n\r\n<div id=\"game-wrapper\" class=\"flex-container\">\r\n    <!-- pannello di sinistra con le varie impostazioni -->\r\n    <div id=\"settings-panel\" class=\"wrapper-div slidecontainer\">\r\n        <div id=\"framerate-info\" class=\"info settings-label\">\r\n            <p> Generations per second: {{gameController.generationsPerSecond}}</p>\r\n        </div>\r\n        <div class=\"setting-container container-big\">\r\n            <p class=\"settings-label\"> Generation speed: </p>\r\n            <input type=\"range\" min=\"100\" max=\"1000\" value=\"gameController.intervalTime\" class=\"slider\" (change)=\"gameController.changeSpeed($event.target.value)\">\r\n \r\n        </div>\r\n\r\n        <div class=\"setting-container\">\r\n            <p class=\"settings-label\">\r\n                Show cell's aging\r\n                <input class=\"checkbox-custom\" type=\"checkbox\" value=\"true\" (change)=\"setShowingAge($event.target.checked)\">\r\n                <br>\r\n            </p>\r\n        </div>\r\n        <div id=\"dropdown-container\">\r\n            <div id=\"drops-left\" class=\"setting-container dropdown\">\r\n                <button id=\"dropbtn-left\" class=\"button\" >Grid Size</button>\r\n                <div id=\"dropdown-content-left\">\r\n                    <button class=\"menu-button\" (click)=\"gameGrid.changeGridDimension(32); \">Small (32x32)</button>\r\n                    <button class=\"menu-button\" (click)=\"gameGrid.changeGridDimension(40);\">Medium (40x40)</button>\r\n                    <button class=\"menu-button\" (click)=\"gameGrid.changeGridDimension(64);\">Large (64x64)</button>\r\n                    <button class=\"menu-button\" (click)=\"gameGrid.changeGridDimension(80);\">Larger (80x80)</button>\r\n                </div>\r\n            </div>\r\n            <div id=\"drops-right\" class=\"setting-container dropdown\">\r\n                <button id=\"dropbtn-right\" class=\" button\">Presets</button>\r\n                <div id=\"dropdown-content-right\">\r\n                    <button class=\"menu-button\" (click)=\"gameController.stopGame(); gameGrid.preset('die hard 1')\">DieHard 1</button>\r\n                    <button class=\"menu-button\" (click)=\"gameController.stopGame(); gameGrid.preset('endless growth')\">Endless growth</button>\r\n                    <button class=\"menu-button\" (click)=\"gameController.stopGame(); gameGrid.preset('gosper cannon')\">Gosper's cannon</button>\r\n                    <button class=\"menu-button\" (click)=\"gameController.stopGame(); gameGrid.preset('rly cool')\">quite cool maybe</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- fine pannello di sinistra -->\r\n\r\n    <!-- contenitore della griglia di gioco  -->\r\n    <div id='game-grid-socket' class=\"wrapper-div\">\r\n        <app-game-grid></app-game-grid>\r\n    </div>\r\n\r\n    <!-- pannello di destra con i tasti di azione e la label del numero di generazione  -->\r\n    <div id=\"action-panel\" class=\"wrapper-div\">\r\n        <div id=\"generation-info\" class=\"info settings-label\">\r\n            <p> Generation Number: {{gameController.generation}}</p>\r\n        </div>\r\n        <button type=\"button\" class=\"button\" id=\"start-game\" *ngIf=\"gameController.isRunning()==false\" (click)=\"startGame();\"\r\n            [disabled]=\"isStartClicked\"> Start </button>\r\n        <button type=\"button\" class=\"button\" id=\"pause-game\" *ngIf=\"gameController.isRunning()==true\" (click)=\"pauseGame();\">\r\n            Pause </button>\r\n        <button type=\"button\" class=\"button\" id=\"stop-game\" (click)=\"stopGame();\"> Stop </button>\r\n        <button type=\"button\" class=\"button\" id=\"reset-game\" (click)=\"gameController.resetGame();\"> Clear </button>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/game-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_game__ = __webpack_require__("../../../../../src/app/Model/game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_grid_component__ = __webpack_require__("../../../../../src/app/Components/game-grid.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CellComponent } from '../Model/cell';


var GameBoardComponent = (function () {
    function GameBoardComponent() {
        this.gameRunnig = false;
        this.gameController = new __WEBPACK_IMPORTED_MODULE_1__Model_game__["a" /* default */]();
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        // all'inizializzazione passa la griglia di gioco al Game
        this.gameController.setGameGrid(this.gameGrid);
    };
    GameBoardComponent.prototype.setShowingAge = function (show) {
        this.gameGrid.showAge(show);
    };
    GameBoardComponent.prototype.startGame = function () {
        this.gameController.startGame();
    };
    GameBoardComponent.prototype.stopGame = function () {
        this.gameController.stopGame();
    };
    GameBoardComponent.prototype.pauseGame = function () {
        this.gameController.pauseGame();
    };
    return GameBoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__game_grid_component__["a" /* GameGridComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__game_grid_component__["a" /* GameGridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__game_grid_component__["a" /* GameGridComponent */]) === "function" && _a || Object)
], GameBoardComponent.prototype, "gameGrid", void 0);
GameBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-game-board',
        template: __webpack_require__("../../../../../src/app/Components/game-board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/game-board.component.css")] // view
    })
    /* Questa classe rappresenta la schermata di gioco: la view è rappresentata nel file html e css.
       mette quindi a disposizione una serie di bottoni e di inputs e
       predispone le funzioni da invocare quando tali inputs vengono usati.
       Le funzioni di risposta agli eventi richiamano le funzionalità esposte dalla classe '../Model/game' */
    ,
    __metadata("design:paramtypes", [])
], GameBoardComponent);

var _a;
//# sourceMappingURL=game-board.component.js.map

/***/ }),

/***/ "../../../../../src/app/Components/game-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#game-grid-div{\r\n    display: inline-block;\r\n    border: 4px solid black;\r\n}\r\n\r\n.board-cell{\r\n    \r\n    border-width: 1px!important;\r\n    display: grid;\r\n    display: -ms-grid;\r\n    float: left;\r\n   /*  background-color: rgb(245, 123, 75); */\r\n\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/game-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='game-grid-div' [style.width.px]=\"this.gridWidth\" [style.height.px]=\"this.gridHeight\" >\r\n    <div class=\"grid-container\">\r\n        <app-cell-component class=\"board-cell grid-item\" \r\n            *ngFor=\"let cell of this.cells\" \r\n            [style.width.px]=\"this.cellWidth\" \r\n            [style.height.px]=\"this.cellHeight\"\r\n            [style.background-color]=\"cell.getColour()\"\r\n            (click)=\"cell.clicked()\"\r\n            style=\"border: 1px solid black\" >\r\n        </app-cell-component>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/game-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_cell_component__ = __webpack_require__("../../../../../src/app/Components/cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_Position__ = __webpack_require__("../../../../../src/app/Model/Position.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameGridComponent = (function () {
    function GameGridComponent() {
        // valori di default iniziali 
        this.numRows = 40;
        this.numCols = 40;
        this.gridHeight = 640;
        this.gridWidth = 640;
        this.cellBorder = 1;
        this.cells = [];
        this.gridMap = new Map();
        this.showingAge = false;
    }
    GameGridComponent.prototype.ngOnInit = function () {
        this.setUpCellsSize();
        this.setUpGrid();
    };
    GameGridComponent.prototype.preset = function (presetName) {
        var center = Math.floor(((this.numCols - 1) * (this.numRows - 1) / 2) + Math.floor(this.numRows / 2));
        if (presetName === 'die hard 1') {
            this.gridMap.get(center).clicked();
            this.gridMap.get(center + 1).clicked();
            this.gridMap.get(center - this.numRows).clicked();
            this.gridMap.get(center + 1 + 4 * (this.numRows)).clicked();
            this.gridMap.get(center + 1 + 5 * (this.numRows)).clicked();
            this.gridMap.get(center + 1 + 5 * (this.numRows) - 2).clicked();
            this.gridMap.get(center + 1 + 6 * (this.numRows)).clicked();
        }
        if (presetName === 'rly cool') {
            this.gridMap.get(center - 7 * this.numRows).clicked();
            this.gridMap.get(center - 8 * this.numRows).clicked();
            this.gridMap.get(center - 9 * this.numRows).clicked();
            this.gridMap.get(center - this.numRows).clicked();
            this.gridMap.get(center - 2 * this.numRows).clicked();
            this.gridMap.get(center - 3 * this.numRows).clicked();
            this.gridMap.get(center).clicked();
            this.gridMap.get(center + this.numRows).clicked();
            this.gridMap.get(center + 2 * this.numRows).clicked();
            this.gridMap.get(center + 3 * this.numRows).clicked();
            this.gridMap.get(center + 7 * this.numRows).clicked();
            this.gridMap.get(center + 8 * this.numRows).clicked();
            this.gridMap.get(center + 9 * this.numRows).clicked();
        }
        if (presetName === 'endless growth') {
            this.gridMap.get(center).clicked();
            this.gridMap.get(center - 1).clicked();
            this.gridMap.get(center - 2).clicked();
            this.gridMap.get(center + 1 - 2 * (this.numRows)).clicked();
            this.gridMap.get(center + 2 - 2 * (this.numRows)).clicked();
            this.gridMap.get(center + 2 - 4 * (this.numRows)).clicked();
            this.gridMap.get(center - 2 + 2 * (this.numRows)).clicked();
            this.gridMap.get(center - 3 + 2 * (this.numRows)).clicked();
            this.gridMap.get(center - 1 + 2 * (this.numRows)).clicked();
            this.gridMap.get(center - 2 + 3 * (this.numRows)).clicked();
        }
        if (presetName === 'gosper cannon') {
            this.gridMap.get(center).clicked();
            this.gridMap.get(center - this.numRows).clicked();
            this.gridMap.get(center - 1 - this.numRows).clicked();
            this.gridMap.get(center + 1 - this.numRows).clicked();
            this.gridMap.get(center - 2 - 2 * this.numRows).clicked();
            this.gridMap.get(center + 2 - 2 * this.numRows).clicked();
            this.gridMap.get(center - 3 * this.numRows).clicked();
            this.gridMap.get(center - 7 * this.numRows).clicked();
            this.gridMap.get(center - 1 - 7 * this.numRows).clicked();
            this.gridMap.get(center + 1 - 7 * this.numRows).clicked();
            this.gridMap.get(center - 3 - 4 * this.numRows).clicked();
            this.gridMap.get(center - 3 - 5 * this.numRows).clicked();
            this.gridMap.get(center - 2 - 6 * this.numRows).clicked();
            this.gridMap.get(center + 3 - 4 * this.numRows).clicked();
            this.gridMap.get(center + 3 - 5 * this.numRows).clicked();
            this.gridMap.get(center + 2 - 6 * this.numRows).clicked();
            this.gridMap.get(center - 16 * this.numRows).clicked();
            this.gridMap.get(center - 17 * this.numRows).clicked();
            this.gridMap.get(center - 1 - 16 * this.numRows).clicked();
            this.gridMap.get(center - 1 - 17 * this.numRows).clicked();
            this.gridMap.get(center + 5 * this.numRows).clicked();
            this.gridMap.get(center - 4 + 5 * this.numRows).clicked();
            this.gridMap.get(center + 7 * this.numRows).clicked();
            this.gridMap.get(center - 4 + 7 * this.numRows).clicked();
            this.gridMap.get(center + 1 + 7 * this.numRows).clicked();
            this.gridMap.get(center - 5 + 7 * this.numRows).clicked();
            this.gridMap.get(center - 1 + 4 * this.numRows).clicked();
            this.gridMap.get(center - 1 + 3 * this.numRows).clicked();
            this.gridMap.get(center - 2 + 4 * this.numRows).clicked();
            this.gridMap.get(center - 2 + 3 * this.numRows).clicked();
            this.gridMap.get(center - 3 + 4 * this.numRows).clicked();
            this.gridMap.get(center - 3 + 3 * this.numRows).clicked();
            this.gridMap.get(center - 2 + 18 * this.numRows).clicked();
            this.gridMap.get(center - 2 + 17 * this.numRows).clicked();
            this.gridMap.get(center - 3 + 18 * this.numRows).clicked();
            this.gridMap.get(center - 3 + 17 * this.numRows).clicked();
        }
    };
    // inizializzazione della griglia, viene svolta al caricamento della pagina di gioco
    GameGridComponent.prototype.setUpGrid = function () {
        for (var i = 0; i < this.numCols; ++i) {
            for (var j = 0; j < this.numRows; ++j) {
                var cell = new __WEBPACK_IMPORTED_MODULE_1__Components_cell_component__["a" /* CellComponent */](); // definisco componente Cell
                var position = new __WEBPACK_IMPORTED_MODULE_2__Model_Position__["a" /* default */](i, j); // definisco una Position
                cell.setPosition(position); // passo la Position alla cella appena definita
                this.cells.push(cell); // inserisco la cella nella lista - che compone la griglia
                this.gridMap.set((j * this.numCols + i), cell); // uso mappa per salvare ogni cella e semplificare il trovarne i vicini
            }
        }
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            this.setNeighborhood(cell);
        }
    };
    // assegno ad ogni cella i suoi vicini - considerando anche il caso delle celle al bordo
    GameGridComponent.prototype.setNeighborhood = function (cell) {
        var x_pos = cell.getPosition().x;
        var y_pos = cell.getPosition().y;
        // così gestisco i problemi che sorgono col margine della grid
        if (x_pos === this.numCols - 1) {
            this.findNeighbours(cell, x_pos, y_pos, -1, 0);
        }
        else if (x_pos === 0) {
            this.findNeighbours(cell, x_pos, y_pos, 0, 1);
        }
        else {
            this.findNeighbours(cell, x_pos, y_pos, -1, 1);
        }
    };
    // la funzione che calcola i vicini di ogni cella 
    GameGridComponent.prototype.findNeighbours = function (cell, x_pos, y_pos, leftBound, rightbound) {
        for (var i = leftBound; i <= rightbound; ++i) {
            if (i !== 0) {
                if (this.gridMap.get(x_pos + i + y_pos * this.numCols) != null) {
                    cell.addNeighbour(this.gridMap.get(x_pos + i + y_pos * this.numCols));
                }
            }
            if (this.gridMap.get(x_pos + i + (y_pos - 1) * this.numCols) != null) {
                cell.addNeighbour(this.gridMap.get(x_pos + i + (y_pos - 1) * this.numCols));
            }
            if (this.gridMap.get(x_pos + i + (y_pos + 1) * this.numCols) != null) {
                cell.addNeighbour(this.gridMap.get(x_pos + i + (y_pos + 1) * this.numCols));
            }
        }
    };
    GameGridComponent.prototype.changeGridDimension = function (numCells) {
        this.cells = [];
        this.numRows = numCells;
        this.numCols = numCells;
        document.getElementById('stop-game').click();
        this.setUpCellsSize();
        this.setUpGrid();
        this.showAge(this.showingAge);
    };
    GameGridComponent.prototype.setUpCellsSize = function () {
        this.cellHeight = Math.floor(this.gridHeight / this.numRows) - 2 * this.cellBorder;
        this.cellWidth = Math.floor(this.gridWidth / this.numCols) - 2 * this.cellBorder;
    };
    GameGridComponent.prototype.resetCellsStatus = function () {
        this.cells.forEach(function (cell) {
            cell.reset();
        });
    };
    // scorre tutte le celle della griglia e, per ognuna, richiama la funzione di calcolo dello stato futuro.
    // la griglia viene poi aggiornata chiamando updateGameStatus
    GameGridComponent.prototype.computeCellsFutureStatus = function () {
        console.log(this.cells.length);
        this.cells.forEach(function (cell) {
            cell.nextGeneration();
        });
        this.updateGameStatus();
    };
    // semplicemente applica lo stato futuro di ogni cella - avanzando con la generazione
    GameGridComponent.prototype.updateGameStatus = function () {
        this.cells.forEach(function (cell) {
            cell.applyGeneration();
        });
    };
    // risponde all'input che permette di scegliere se mostrare o meno l'age delle celle
    GameGridComponent.prototype.showAge = function (show) {
        this.cells.forEach(function (cell) {
            cell.setTrackAge(show);
        });
        this.showingAge = show;
    };
    return GameGridComponent;
}());
GameGridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-game-grid',
        template: __webpack_require__("../../../../../src/app/Components/game-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Components/game-grid.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GameGridComponent);

//# sourceMappingURL=game-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/Model/Position.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* per comodità uso un oggetto Position per codificare la posizione di ogni cella nella griglia */
var Position = (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
/* harmony default export */ __webpack_exports__["a"] = (Position);
//# sourceMappingURL=Position.js.map

/***/ }),

/***/ "../../../../../src/app/Model/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);

/* Questa classe rappresenta il modello concettuale del gioco.
   Contiene quindi tutti gli attributi necessari a rappresentare la struttura a turni del gioco ed a tenere traccia dello stato corrente
   La gestione della griglia di gioco e della relativa logica è tuttavia affidata al componente @'../Components/game-grid.component'.
   
 */
var Game = (function () {
    function Game() {
        this.generation = 0;
        this.intervalTime = 500; // in ms
        this.running = false;
        this.generationsPerSecond = (Math.round((1000 / this.intervalTime) * 100)) / 100;
    }
    Game.prototype.setGameGrid = function (gameGrid) {
        this.gameGrid = gameGrid;
    };
    Game.prototype.computeGenerationsPerSecond = function () {
        this.generationsPerSecond = (Math.round((1000 / this.intervalTime) * 100)) / 100;
    };
    Game.prototype.setIntervalTime = function (interval) {
        this.intervalTime = interval;
        this.computeGenerationsPerSecond();
        console.log(this.intervalTime);
    };
    Game.prototype.stopGame = function () {
        if (this.timerSub !== null && this.timerSub !== undefined) {
            this.timerSub.unsubscribe();
        } // si fa l'unsubscribe al timer, lo stesso Observable dopo verrà de-instanziato
        this.running = false;
        this.playing = null;
        this.generation = 0;
        this.resetGame();
    };
    Game.prototype.resetGame = function () {
        this.gameGrid.resetCellsStatus();
    };
    Game.prototype.pauseGame = function () {
        if (this.timerSub !== null && this.timerSub !== undefined) {
            this.timerSub.unsubscribe();
        } // si fa l'unsubscribe al timer, lo stesso Observable dopo verrà de-instanziato
        this.running = false;
        this.playing = null;
    };
    // la funzione che effettivamente avvia lo scorrere dei turni di gioco
    Game.prototype.startGame = function () {
        var _this = this;
        // l'Observable playing è inizializzato come un observable che emette segnali ogni intervalTime
        this.playing = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].interval(this.intervalTime);
        if (this.running) {
            return;
        }
        else {
            // uso timerSub per fare subscribe all'observable playing la funzione di avanzamento del turno iterateGame()
            // ad ogni scadere del timer. Struttura asincrona e non bloccante 
            this.timerSub = this.playing.subscribe(function (generation) {
                _this.running = true;
                console.log(_this.intervalTime);
                _this.iterateGame();
            });
        }
    };
    // cambio velocità di gioco, per attuare la nuova velocità metto in pausa e riparto subito dopo
    Game.prototype.changeSpeed = function (newIntervalTime) {
        this.setIntervalTime(newIntervalTime);
        if (this.running) {
            this.pauseGame();
            this.startGame();
        }
    };
    Game.prototype.isRunning = function () {
        return this.running;
    };
    // l'iterazione consiste nel far calcolare ed applicare lo stato futuro alle celle della griglia.
    // si avanza anche il numero di generazione
    Game.prototype.iterateGame = function () {
        this.gameGrid.computeCellsFutureStatus();
        console.log('generazione: ', this.generation);
        return this.generation++;
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["a"] = (Game);
//# sourceMappingURL=game.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_app_component__ = __webpack_require__("../../../../../src/app/Components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_game_board_component__ = __webpack_require__("../../../../../src/app/Components/game-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_cell_component__ = __webpack_require__("../../../../../src/app/Components/cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_game_grid_component__ = __webpack_require__("../../../../../src/app/Components/game-grid.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__Components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__Components_cell_component__["a" /* CellComponent */],
            __WEBPACK_IMPORTED_MODULE_4__Components_game_board_component__["a" /* GameBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Components_game_grid_component__["a" /* GameGridComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__Components_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map