import { Component, OnInit, Input, Output,EventEmitter, ChangeDetectionStrategy,  SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pager } from '../../../../helpers/pager';
import { PageChangedEvent } from '../../models/page-changed-event';

/**
 * this component handles the pager controls for the player stats table
 */
@Component({
  selector: 'app-page-controls',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './page-controls.component.html',
  styleUrls: ['./page-controls.component.css']
})
export class PageControlsComponent implements OnInit {
  @Input() items:any[] = [];
  @Input() pageSize:number = 10;
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100];
  
  @Output() pageChanged:EventEmitter<PageChangedEvent> = new EventEmitter();
  
  length:number = 100;
  pager:Pager;
  currentPage:number = 0;

  constructor() { }

  ngOnInit(): void {
    //init the pager and emit the initial results
    this.initPager();
    this.handlePageChanged(0);
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes?.items?.currentValue && !changes.items.firstChange){
      this.initPager();
      this.handlePageChanged(this.currentPage);
    }
  }

  /**
   * respond to paginator page events
   * @param event 
   */
  handlePageEvent(event:PageEvent){
    const {pageIndex,pageSize} = event;
    
    if(pageSize !== this.pager.resultsPerPage){
      this.updatePageSize(pageSize);
      this.initPager();
      this.handlePageChanged(pageIndex);
    }
    else{
      this.handlePageChanged(pageIndex);
    }
  }

  /**
   * set the page size from the paginator events
   * @param pageSize 
   */
  updatePageSize(pageSize:number){
    this.pageSize = pageSize;
  }

  /**
   * init the pager with the provided options
   */
  initPager(){
    this.length = this.items.length;
    const options = {
      items:this.items,
      resultPerPage:this.pageSize
    };

    if(!this.pager){
      this.pager = new Pager(options);
    }
    else{
      this.pager.init(options);
    }
  }

  /**
   * change the page and emit the current page items
   * @param page 
   */
  handlePageChanged(page:number){
    this.currentPage = page;
    const currentItems = this.pager.getPage(this.currentPage);
    this.pageChanged.emit({
      items:currentItems
    });
  }
}
