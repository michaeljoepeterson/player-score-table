import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreTableRoutingModule } from './score-table-routing.module';
import { PlayerScoreTableComponent } from './components/player-score-table/player-score-table.component';
import { PlayerScorePageComponent } from './pages/player-score-page/player-score-page.component';
import { ScoreRowComponent } from './components/score-row/score-row.component';
import { MatIconModule } from '@angular/material/icon';
import { PageControlsComponent } from './components/page-controls/page-controls.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    PlayerScoreTableComponent,
    PlayerScorePageComponent,
    ScoreRowComponent,
    PageControlsComponent
  ],
  imports: [
    CommonModule,
    ScoreTableRoutingModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class ScoreTableModule { }
