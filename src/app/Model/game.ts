import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { GameBoardComponent } from '../Components/game-board.component';
import { GameGridComponent } from '../Components/game-grid.component';

/* Questa classe rappresenta il modello concettuale del gioco. 
   Contiene quindi tutti gli attributi necessari a rappresentare la struttura a turni del gioco ed a tenere traccia dello stato corrente
   La gestione della griglia di gioco e della relativa logica è tuttavia affidata al componente @'../Components/game-grid.component'.
   
 */

export default class Game {

    public playing: Observable<any>; // sarà usato per creare un Observable che emette segnali ad intervalli regolari
    public timerSub: Subscription;   // è una Subscription - usata per mettersi in ascolto dell'Observable playing
    public running: boolean;         // tiene traccia se il gioco sta avanzando o è sospeso
    public intervalTime: number;     // intervallo fra le emissioni di playing
    public generation: number;       // numero della generazione delle celle del turno corrente
    public gameGrid: GameGridComponent; // la griglia di gioco - usata per richiamarne l'aggiornamento allo scadere di ogni intervallo
    public generationsPerSecond: number; 

    constructor() {
        this.generation = 0;
        this.intervalTime = 500; // in ms
        this.running = false;
        this.generationsPerSecond = (Math.round((1000 / this.intervalTime) * 100)) / 100;
    }

    setGameGrid(gameGrid: GameGridComponent) {
        this.gameGrid = gameGrid;
    }

    computeGenerationsPerSecond() {
        this.generationsPerSecond = (Math.round((1000 / this.intervalTime) * 100)) / 100;
    }

    setIntervalTime(interval: number) {
        this.intervalTime = interval;
        this.computeGenerationsPerSecond();
        console.log(this.intervalTime);
    }

    stopGame() {
        if (this.timerSub !== null && this.timerSub !== undefined) {
            this.timerSub.unsubscribe();
        } // si fa l'unsubscribe al timer, lo stesso Observable dopo verrà de-instanziato

        this.running = false;
        this.playing = null;
        this.generation = 0;
        this.resetGame();
    }

    resetGame() {
        this.gameGrid.resetCellsStatus();
    }

    pauseGame() {
        if (this.timerSub !== null && this.timerSub !== undefined) {
            this.timerSub.unsubscribe();
        } // si fa l'unsubscribe al timer, lo stesso Observable dopo verrà de-instanziato
        this.running = false;
        this.playing = null;
    }
    // la funzione che effettivamente avvia lo scorrere dei turni di gioco
    startGame() { 
        // l'Observable playing è inizializzato come un observable che emette segnali ogni intervalTime
        this.playing = Observable.interval(this.intervalTime); 
        if (this.running) {
            return;
        } else {
            // uso timerSub per fare subscribe all'observable playing la funzione di avanzamento del turno iterateGame()
            // ad ogni scadere del timer. Struttura asincrona e non bloccante 
            this.timerSub = this.playing.subscribe(generation => {  
                this.running = true;
                console.log(this.intervalTime);
                this.iterateGame();
            });
        }
    }
    // cambio velocità di gioco, per attuare la nuova velocità metto in pausa e riparto subito dopo
    public changeSpeed(newIntervalTime: number) { 
        
        this.setIntervalTime(newIntervalTime);
        if (this.running) {
            this.pauseGame();
            this.startGame();
        }
    }


    public isRunning() {
        return this.running;
    }

    // l'iterazione consiste nel far calcolare ed applicare lo stato futuro alle celle della griglia.
    // si avanza anche il numero di generazione
    private iterateGame() {
        this.gameGrid.computeCellsFutureStatus(); 
        console.log('generazione: ', this.generation);
        return this.generation++;
    }

}
