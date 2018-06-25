import { Injectable, Component, Directive, ViewChild, OnInit, ElementRef } from '@angular/core';
// import { CellComponent } from '../Model/cell';
import Game from '../Model/game';
import { CellComponent } from '../Components/cell.component';
import { GameGridComponent } from './game-grid.component';

@Component({
    selector: 'app-game-board',
    templateUrl: 'game-board.component.html', // view
    styleUrls: ['game-board.component.css']   // view
})
/* Questa classe rappresenta la schermata di gioco: la view è rappresentata nel file html e css.
   mette quindi a disposizione una serie di bottoni e di inputs e
   predispone le funzioni da invocare quando tali inputs vengono usati. 
   Le funzioni di risposta agli eventi richiamano le funzionalità esposte dalla classe '../Model/game' */

export class GameBoardComponent implements OnInit {
    private elementRef: ElementRef;
    public gameController: Game;
    public gameRunnig = false;

    @ViewChild(GameGridComponent) gameGrid: GameGridComponent;

    constructor() {
        this.gameController = new Game();
    }

    ngOnInit() {
        // all'inizializzazione passa la griglia di gioco al Game
        this.gameController.setGameGrid(this.gameGrid);
    }

    setShowingAge(show) {
        this.gameGrid.showAge(show);
    }
    
    startGame() {
        this.gameController.startGame();
    }

    stopGame() {
        this.gameController.stopGame();
    }

    pauseGame() {
        this.gameController.pauseGame();
    }


}
