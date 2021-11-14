import { Component, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/models/player-stats';
import { PlayerDataService } from '../../../../services/player-data.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-player-score-page',
  templateUrl: './player-score-page.component.html',
  styleUrls: ['./player-score-page.component.css']
})
export class PlayerScorePageComponent implements OnInit {
  playerStats:PlayerStats[] = [];

  constructor(
    private playerDataService:PlayerDataService
  ) { }

  ngOnInit(): void {
    this.getPlayerStats();
  }

  getPlayerStats(){
    this.playerDataService.getPlayerData().pipe(
      take(1)
    ).subscribe(res => console.log(res));
  }
}
