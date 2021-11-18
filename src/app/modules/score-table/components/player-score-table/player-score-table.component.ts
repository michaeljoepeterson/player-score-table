import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PlayerDataSortingService } from '../../../../services/player-data-sorting.service';
import { PlayerStats } from '../../../../models/player-stats';
import { defaultPlayerTableData, HeaderData } from '../../models/header-data';
import { PageChangedEvent } from '../../models/page-changed-event';

@Component({
  selector: 'app-player-score-table',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './player-score-table.component.html',
  styleUrls: ['./player-score-table.component.css']
})
export class PlayerScoreTableComponent implements OnInit {
  @Input() playerStats:PlayerStats[] = [];
  headers:HeaderData[] = defaultPlayerTableData;
  /**
   * lookup for getting sort methods for a specific target prop
   * method should take in a player stat array, target prop on the player
   * stats array, and a boolean indicating if the list should be sorted
   * in descending order
   */
  sortMethodLookup:any = {};
  activeSortProp:string = null;
  sortDescending:boolean = true;

  /**
   * the currently displayed player stats
   */
  currentPlayerStats:PlayerStats[] = [];

  constructor(
    private playerDataSortingService:PlayerDataSortingService,
    private ref:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.registerSortMethods();
    this.setCurrentPlayerStats(this.playerStats);
  }

  /**
   * register sort methods in lookup object
   */
  registerSortMethods(){
    //ensure correct context binded to the sort method
    this.sortMethodLookup.Yds = this.playerDataSortingService.sortByNumber.bind(this.playerDataSortingService);
    this.sortMethodLookup.TD = this.playerDataSortingService.sortByNumber.bind(this.playerDataSortingService);
    this.sortMethodLookup.Lng = this.playerDataSortingService.sortByRushingTouchdowns.bind(this.playerDataSortingService);
  }

  /**
   * method called by click handler
   * gets the specific sort method for the header and runs that method
   * and assigns the sorted stats to the components player stats
   * @param header 
   * @returns 
   */
  handleSort(header:HeaderData){
    try{
      const {targetProp} = header;
      let method = this.sortMethodLookup[targetProp];
      if(!method){
        return
      }
      this.setActiveSort(targetProp);
      this.playerStats = method(this.playerStats,targetProp,this.sortDescending);
      //console.log(this.playerStats);
    }
    catch(e){
      console.error(e);
    }
  }

  /**
   * set the active sort prop and handle assigning the sort direction bool
   * @param sortProp 
   */
  setActiveSort(sortProp:string = null){
    if(sortProp !== this.activeSortProp){
      this.sortDescending = true;
    }
    else{
      this.sortDescending = !this.sortDescending;
    }
    this.activeSortProp = sortProp
  }

  /**
   * set the current player stats to the provided stats
   * @param stats 
   */
  setCurrentPlayerStats(stats:PlayerStats[]){
    this.currentPlayerStats = [...stats];
  }

  /**
   * respond to page change events
   * @param pageChangedEvent 
   */
  handlePageChange(pageChangedEvent:PageChangedEvent){
    let {items} = pageChangedEvent;
    this.setCurrentPlayerStats(items);
    this.ref.detectChanges();
  }
}
