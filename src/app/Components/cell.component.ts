import Position from '../Model/Position';
import { Component } from '@angular/core';

@Component({
    selector: 'app-cell-component',
    template: ''
})


// Questa classe rappresenta la singola cella della griglia, contiene tutti gli attributi che codificano lo stato attuale della cella
// contiene anche le funzioni necessarie a calcolare lo stato della cella nella generazione successiva e ad applicare tale stato
export class CellComponent {
    private position: Position;
    private living: boolean;
    private willBeAlive: boolean;
    // ogni cella all'inizializzazione riceve dal componente griglia anche la lista delle celle vicine
    public neighborhood: CellComponent[]; 
    private age: number;
    private trackAging: boolean;
    public colour = 'rgba(235, 235, 235, 0.5)';

    constructor() {
        this.living = false;
        this.age = 0;
        this.neighborhood = [];
        this.willBeAlive = false;
        this.trackAging = false;
    }

    public clicked() {
        this.toggleStatus();
        this.updateColour();
    }
    public updateStatusAs_Alive(num: number) {
        if (num < 2 || num > 3) {
            this.willBeAlive = false;
        } else {
            this.willBeAlive = true;
        }
    }
    public updateStausAs_Dead(num: number) {
        if (num === 3) {
            this.willBeAlive = true;
        }
    }
    public setPosition(position: Position) {
        this.position = position;
    }
    public getPosition() {
        return this.position;
    }
    public getStatus() {
        return this.living;
    }
    public setStatus(newStatus: boolean) {
        this.living = newStatus;
    }
    public toggleStatus() {
        this.living = !this.living;
    }
    public getColour() {
        return this.colour;
    }

    public setTrackAge(track: boolean) {
        this.trackAging = track;
    }

    public reset() {
        this.resetColour();
        this.willBeAlive = false;
        this.living = false;
        this.age = 0;
    }

    public resetColour() {
        this.colour = 'rgba(235, 235, 235, 0.5)';
    }

    public updateColour() {
        if (this.living) {
            if (this.trackAging) {
                this.colour = this.ageColour();

            } else {
                this.colour = '#ff9933';
            }
        } else {
            this.resetColour();
        }
    }
    public addNeighbour(cell: CellComponent) {
        this.neighborhood.push(cell);
    }
    public isAlive() {
        return this.living;
    }

    // scorre tutte le celle del vicinato della cella e conta in quante sono Alive
    public countAliveNeighbours() {
        let num = 0;
        this.neighborhood.forEach(cell => {
            if (cell.isAlive()) {
                num++;
            }
        });
        return num;
    }

    // imposta il valore della variabile willBeAlive, che determina se la cella sarà Alive anche la prossima generazione
    public nextGeneration() { 
        const aliveNeighbours = this.countAliveNeighbours();
        if (this.living) {
            this.updateStatusAs_Alive(aliveNeighbours);
        } else {
            this.updateStausAs_Dead(aliveNeighbours);
        }
    }

    // applica la nuova generazione alla cella e ne aggiorna età e colore
    public applyGeneration() {
        this.living = this.willBeAlive;
        this.updateColour();
        if (this.living) {
            this.age++;
        } else {
            this.age = 0;
        }
    }

    public ageColour() { // un modo per calcolare i vari colori intermedi, ci sta che ci sia di meglio
        const percent = (this.age) * 5;
        if (percent >= 100) {
            return 'hsl(-100, 100%, 20%)';
        }
        const startHue = 130,
            endHue = 0;

        const startLum = 60,
            endLum = 20;

        const a = percent / 100,
            b = Math.abs(endHue - startHue) * a,
            c = startHue - 100 - b;

        const d = Math.abs(endLum - startLum) * a,
            e = startLum - d;
        return 'hsl(' + c + ', 100%, ' + e + '%)';
    }
}
