import { Component, OnInit, Injectable } from '@angular/core';
import { CellComponent } from '../Components/cell.component';
import Position from '../Model/Position';


@Component({
    selector: 'app-game-grid',
    templateUrl: 'game-grid.component.html',
    styleUrls: ['game-grid.component.css']
})

export class GameGridComponent implements OnInit, Injectable {
    public numRows: number;
    public numCols: number;
    public gridHeight: number;  // height expressed in pixels
    public gridWidth: number;   // width expressed in pixels
    public cellHeight: number;
    public cellWidth: number;
    public cellBorder: number;
    public cells: CellComponent[];
    public gridMap: Map<number, CellComponent>;
    public showingAge: boolean;


    constructor() {
        // valori di default iniziali 
        this.numRows = 40;
        this.numCols = 40;
        this.gridHeight = 640;
        this.gridWidth = 640;
        this.cellBorder = 1;
        this.cells = [];
        this.gridMap = new Map<number, CellComponent>();
        this.showingAge = false;
    }


    ngOnInit() {
        this.setUpCellsSize();
        this.setUpGrid();
    }

    preset(presetName: String) { // hardcoded, poco elegante ma credo tollerabile
        const center = Math.floor(((this.numCols - 1) * (this.numRows - 1) / 2) + Math.floor(this.numRows / 2));

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
    }


    // inizializzazione della griglia, viene svolta al caricamento della pagina di gioco
    setUpGrid() {
        for (let i = 0; i < this.numCols; ++i) {
            for (let j = 0; j < this.numRows; ++j) {
                const cell = new CellComponent(); // definisco componente Cell
                const position = new Position(i, j); // definisco una Position
                cell.setPosition(position); // passo la Position alla cella appena definita
                this.cells.push(cell); // inserisco la cella nella lista - che compone la griglia
                this.gridMap.set((j * this.numCols + i), cell); // uso mappa per salvare ogni cella e semplificare il trovarne i vicini
            }
        }
        for (const cell of this.cells) {
            this.setNeighborhood(cell);
        }
    }

    // assegno ad ogni cella i suoi vicini - considerando anche il caso delle celle al bordo
    setNeighborhood(cell: CellComponent) {
        const x_pos = cell.getPosition().x;
        const y_pos = cell.getPosition().y;
        // così gestisco i problemi che sorgono col margine della grid
        if (x_pos === this.numCols - 1) {
            this.findNeighbours(cell, x_pos, y_pos, -1, 0);
        } else if (x_pos === 0) {
            this.findNeighbours(cell, x_pos, y_pos, 0, 1);
        } else {
            this.findNeighbours(cell, x_pos, y_pos, -1, 1);
        }
    }

    // la funzione che calcola i vicini di ogni cella 
    findNeighbours(cell: CellComponent, x_pos: number, y_pos: number, leftBound: number, rightbound: number) {

        for (let i = leftBound; i <= rightbound; ++i) {
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
    }

    changeGridDimension(numCells: number) {
        this.cells = [];
        this.numRows = numCells;
        this.numCols = numCells;
        document.getElementById('stop-game').click();
        this.setUpCellsSize();
        this.setUpGrid();
        this.showAge(this.showingAge);
    }

    setUpCellsSize() {
        this.cellHeight = Math.floor(this.gridHeight / this.numRows) - 2 * this.cellBorder;
        this.cellWidth = Math.floor(this.gridWidth / this.numCols) - 2 * this.cellBorder;
    }

    resetCellsStatus() {
        this.cells.forEach(cell => {
            cell.reset();
        });
    }

    // scorre tutte le celle della griglia e, per ognuna, richiama la funzione di calcolo dello stato futuro.
    // la griglia viene poi aggiornata chiamando updateGameStatus
    computeCellsFutureStatus() {
        console.log(this.cells.length);
        this.cells.forEach(cell => {
            cell.nextGeneration();
        });
        this.updateGameStatus();
    }

    // semplicemente applica lo stato futuro di ogni cella - avanzando con la generazione
    updateGameStatus() {
        this.cells.forEach(cell => {
            cell.applyGeneration();
        });
    }

    // risponde all'input che permette di scegliere se mostrare o meno l'age delle celle
    showAge(show) {
        this.cells.forEach(cell => {
            cell.setTrackAge(show);

        });
        this.showingAge = show;
    }

}
