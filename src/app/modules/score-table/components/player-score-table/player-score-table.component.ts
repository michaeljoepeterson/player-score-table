import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PlayerStats } from '../../../../models/player-stats';
import { defaultPlayerTableData, HeaderData } from '../../models/header-data';

@Component({
  selector: 'app-player-score-table',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './player-score-table.component.html',
  styleUrls: ['./player-score-table.component.css']
})
export class PlayerScoreTableComponent implements OnInit {
  @Input() playerStats:PlayerStats[] = [];
  headers:HeaderData[] = defaultPlayerTableData;

  constructor() { }

  ngOnInit(): void {
  }

  handleSort(){
    console.log('sort')
  }
}
