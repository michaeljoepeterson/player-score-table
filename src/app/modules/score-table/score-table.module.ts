import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreTableRoutingModule } from './score-table-routing.module';
import { PlayerScoreTableComponent } from './components/player-score-table/player-score-table.component';
import { PlayerScorePageComponent } from './pages/player-score-page/player-score-page.component';
import { ScoreRowComponent } from './components/score-row/score-row.component';
import { MatIconModule } from '@angular/material/icon';
import { PageControlsComponent } from './components/page-controls/page-controls.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PlayerFilterComponent } from './components/player-filter/player-filter.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadTableButtonComponent } from './components/download-table-button/download-table-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PlayerScoreTableComponent,
    PlayerScorePageComponent,
    ScoreRowComponent,
    PageControlsComponent,
    PlayerFilterComponent,
    DownloadTableButtonComponent
  ],
  imports: [
    CommonModule,
    ScoreTableRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class ScoreTableModule { }
