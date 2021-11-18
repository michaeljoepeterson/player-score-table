import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PlayerStats } from 'src/app/models/player-stats';
import { CsvService } from 'src/app/services/csv.service';

@Component({
  selector: 'app-download-table-button',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './download-table-button.component.html',
  styleUrls: ['./download-table-button.component.css']
})
export class DownloadTableButtonComponent implements OnInit {
  @Input() playerStats:PlayerStats[] = [];
  @ViewChild("downloadLink") downloadLink:ElementRef
  csv:string;

  constructor(
    private csvService:CsvService
  ) { }

  ngOnInit(): void {
  }

  downloadData(){
    this.csv = this.csvService.buildData(this.playerStats);
    console.log(this.playerStats);
    this.downloadLink.nativeElement.setAttribute('href',this.csv);
    this.downloadLink.nativeElement.click();
  }
}
