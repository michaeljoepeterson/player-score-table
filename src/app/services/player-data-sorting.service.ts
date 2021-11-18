import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlayerStats } from '../models/player-stats';

/**
 * service to handle the various sorting methods
 */
@Injectable({
  providedIn: 'root'
})
export class PlayerDataSortingService {
  private _currentPlayerStats:Subject<PlayerStats[]> = new Subject();
  /**
   * current sorted player stats that will allow components to recieve the 
   * current sorted stats when the stats are sorted
   */
  currentPlayerStats:Observable<PlayerStats[]> = this._currentPlayerStats.asObservable();

  constructor() { }

  /**
   * clean number value for sorting
   * @param numberVal 
   * @returns 
   */
  cleanNumberValue(numberVal:any):number{
    if(typeof numberVal === 'number'){
      return Number(numberVal);
    }
    else if(typeof numberVal === 'string'){
      numberVal = numberVal.replace(',','');
      numberVal = numberVal.replace('T','');
      return Number(numberVal);
    }
  }

  /**
   * sort the player stats by a prop that can be handled as a number
   * @param playerStats 
   * @param targetProp 
   * @param sortDescending 
   * @returns 
   */
  sortByNumber(playerStats:PlayerStats[],targetProp:string,sortDescending:boolean = true):PlayerStats[]{
    let sortedStats = [...playerStats];
    
    sortedStats.sort((playerA,playerB) => {
      let statA = this.cleanNumberValue(playerA[targetProp]);
      let statB = this.cleanNumberValue(playerB[targetProp]);
      if(statA > statB){
        return sortDescending ? -1 : 1;
      }
      else if(statA < statB){
        return sortDescending ? 1 : -1;
      }
      else{
        return 0;
      }
    });

    this.updateSortedStats(sortedStats);

    return sortedStats;
  }

  /**
   * sort by the rushing touchdowns stat
   * @param playerStats 
   * @param targetProp 
   * @param sortDescending 
   * @returns 
   */
  sortByRushingTouchdowns(playerStats:PlayerStats[],targetProp:string,sortDescending:boolean = true):PlayerStats[]{
    let sortedStats = [...playerStats];
    
    sortedStats.sort((playerA,playerB) => {
      let targetValueA = String(playerA[targetProp]);
      let targetValueB = String(playerB[targetProp]);
      let hasTouchdownA = targetValueA.includes('T');
      let hasTouchdownB = targetValueB.includes('T');
      //handle case where players have touchdowns
      if(hasTouchdownA && !hasTouchdownB){
        return sortDescending ? -1 : 1;
      }
      else if(!hasTouchdownA && hasTouchdownB){
        return sortDescending ? 1 : -1;
      }
      
      let statA = this.cleanNumberValue(playerA[targetProp]);
      let statB = this.cleanNumberValue(playerB[targetProp]);
      if(statA > statB){
        return sortDescending ? -1 : 1;
      }
      else if(statA < statB){
        return sortDescending ? 1 : -1;
      }
      else{
        return 0;
      }
    });

    this.updateSortedStats(sortedStats);

    return sortedStats;
  }

  /**
   * update the current players observable with the current sorted stats
   * @param playerStats 
   */
  updateSortedStats(playerStats:PlayerStats[]){
    this._currentPlayerStats.next(playerStats);
  }
}
