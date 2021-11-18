import { Injectable } from '@angular/core';
import { PlayerStats } from '../models/player-stats';

/**
 * service to contain methods for filtering player stats
 */
@Injectable({
  providedIn: 'root'
})
export class PlayerFilterService {

  constructor() { }

  /**
   * filter stats by a player name
   * @param stats 
   * @param searchText 
   * @returns 
   */
  filterByPlayerName(stats:PlayerStats[],searchText:string):PlayerStats[]{
    let newStats = stats.filter(stat => stat.Player.toLowerCase().includes(searchText));
    return newStats
  }
}
