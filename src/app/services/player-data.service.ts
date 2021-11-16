import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import PlayerData from '../data/rushing.json';
import { PlayerStats } from '../models/player-stats';

/**
 * service to handle getting the player data
 * in production this service would be communicating with the backend API
 */
@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor() { 

  }

  /**
   * get the player data from the json file and return it as the 
   * correct player stats type
   * @returns an observable containing the data, wrapped in an observable
   * to allow for easier implmentation of http requests
   */
  getPlayerData():Observable<PlayerStats[]>{
    let data = PlayerData.map(data => new PlayerStats(data));
    return of(data);
  }
}
