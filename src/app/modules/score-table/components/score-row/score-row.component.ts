import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/models/player-stats';
import { HeaderData } from '../../models/header-data';

@Component({
  selector: '[app-score-row]',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './score-row.component.html',
  styleUrls: ['./score-row.component.css']
})
export class ScoreRowComponent implements OnInit {
  @Input() headers:HeaderData[] = [];
  @Input() stats:PlayerStats;

  constructor() { }

  ngOnInit(): void {
  }

}
