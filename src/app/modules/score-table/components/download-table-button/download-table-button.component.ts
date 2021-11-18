import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit,  SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerStats } from 'src/app/models/player-stats';
import { CsvService } from 'src/app/services/csv.service';
import { PlayerDataSortingService } from 'src/app/services/player-data-sorting.service';

/**
 * this component renders the download button and handles downloading the
 * player data when clicked
 */
@Component({
  selector: 'app-download-table-button',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './download-table-button.component.html',
  styleUrls: ['./download-table-button.component.css']
})
export class DownloadTableButtonComponent implements OnInit {
  /**
   * provide player stats
   */
  @Input() playerStats:PlayerStats[] = [];
  @ViewChild("downloadLink") downloadLink:ElementRef
  csv:string;
  /**
   * the current player stats based off of any sorting or filtering
   */
  currentPlayerStats:PlayerStats[] = [];
  sortingSub:Subscription;

  constructor(
    private csvService:CsvService,
    private playerDataSortingService:PlayerDataSortingService
  ) { }

  ngOnInit(): void {
    //listen for the current sorting stats so that the sorted list will be downloaded correctly
    this.sortingSub = this.playerDataSortingService.currentPlayerStats.subscribe(stats => {
      this.currentPlayerStats = [...stats];
    })
  }

  /**
   * set the current player stats for use in downloading the csv data
   * @param playerStats 
   */
  setCurrentPlayerStats(playerStats:PlayerStats[]){
    this.currentPlayerStats = [...playerStats];
  }

  /**
   * download the current player stats
   */
  downloadData(){
    this.csv = this.csvService.buildData(this.currentPlayerStats);
    this.downloadLink.nativeElement.setAttribute('href',this.csv);
    this.downloadLink.nativeElement.click();
  }
}
