/* per comodità uso un oggetto Position per codificare la posizione di ogni cella nella griglia */
export default class Position {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

  
}
