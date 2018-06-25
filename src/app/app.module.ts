import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './Components/app.component';
import { GameBoardComponent } from './Components/game-board.component';
import { CellComponent } from './Components/cell.component';
import { GameGridComponent } from './Components/game-grid.component';
import Position from './Model/position';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    GameBoardComponent,
    GameGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
