import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-player-filter',
  templateUrl: './player-filter.component.html',
  styleUrls: ['./player-filter.component.css']
})
export class PlayerFilterComponent implements OnInit {
  name:FormControl = new FormControl('');
  nameSub:Subscription;

  /**
   * output name changes to the parent
   */
  @Output() nameChanged:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.nameSub = this.name.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(val => this.handleNameChanged(val));
  }

  ngOnDestroy(){
    try{
      this.nameSub.unsubscribe();
    }
    catch(e){
      console.error(e);
    }
  }

  handleNameChanged(value:string){
    this.nameChanged.emit(value.toLowerCase());
  }
}
