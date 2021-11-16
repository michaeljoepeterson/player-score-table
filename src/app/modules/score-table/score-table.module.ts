import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreTableRoutingModule } from './score-table-routing.module';
import { PlayerScoreTableComponent } from './components/player-score-table/player-score-table.component';
import { PlayerScorePageComponent } from './pages/player-score-page/player-score-page.component';
import { ScoreRowComponent } from './components/score-row/score-row.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PlayerScoreTableComponent,
    PlayerScorePageComponent,
    ScoreRowComponent
  ],
  imports: [
    CommonModule,
    ScoreTableRoutingModule,
    MatIconModule
  ]
})
export class ScoreTableModule { }
