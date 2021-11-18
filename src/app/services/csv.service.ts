import { Injectable } from '@angular/core';
import { PlayerStats } from '../models/player-stats';
import {defaultPlayerTableData} from '../modules/score-table/models/header-data';

/**
 * service to build csv data for downloading
 */
@Injectable({
  providedIn: 'root'
})
export class CsvService {
  csvContent:string = "data:text/csv;charset=utf-8,";

  constructor(
    
  ) { }

  /**
   * clean number value for use in the csv file
   * @param value 
   * @returns 
   */
  cleanValue(value:any){
    if(typeof value === 'string'){
      value = value.replace(',','');
    }
    return value;
  }

  /**
   * build player stats csv from the provided player stats
   * @param playerStats 
   * @returns 
   */
  buildData(playerStats:PlayerStats[]):string{
    let csv = this.csvContent;
    //init header row
    let rows = [defaultPlayerTableData.map(header => header.name)];
    
    //add player stat rows
    playerStats.forEach((stats) => {
      let row = [];
      defaultPlayerTableData.forEach(header => {
        try{
          let stat = this.cleanValue(stats[header.targetProp]);
          if(!stat && stat !== 0){
            stat = 'none';
          }
          row.push(stat);
        }
        catch(e){
          console.warn(e);
          row.push('Error occured while getting data');
        }
      });
      rows.push(row);
    });

    //build csv content
    rows.forEach((playerStats) => {
      let row = playerStats.join(",");
      csv += row + "\r\n";
    });

    return encodeURI(csv);
  }
}
