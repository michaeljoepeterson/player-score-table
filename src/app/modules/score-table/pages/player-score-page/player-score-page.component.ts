import { Component, OnInit } from '@angular/core';
import { PlayerStats } from '../../../../models/player-stats';
import { PlayerDataService } from '../../../../services/player-data.service';
import {take} from 'rxjs/operators';
import { PlayerFilterService } from '../../../../services/player-filter.service';

@Component({
  selector: 'app-player-score-page',
  templateUrl: './player-score-page.component.html',
  styleUrls: ['./player-score-page.component.css']
})
export class PlayerScorePageComponent implements OnInit {
  playerStats:PlayerStats[] = [];
  filteredStats:PlayerStats[] = [];

  constructor(
    private playerDataService:PlayerDataService,
    private playerFilterService:PlayerFilterService
  ) { }

  ngOnInit(): void {
    this.getPlayerStats();
  }

  /**
   * get the data for the player score page
   */
  getPlayerStats(){
    this.playerDataService.getPlayerData().pipe(
      take(1)
    ).subscribe(res => {
      this.playerStats = [...res];
      this.filteredStats = [...res];
    });
  }

  handleNameChanged(searchText:string){
    this.filteredStats = this.playerFilterService.filterByPlayerName(this.playerStats,searchText);
    console.log(this.filteredStats);
  }
}
