import { Component, OnInit } from '@angular/core';
import { NavData } from '../../models/nav-data';

/**
 * this component handles rendering the navbar and links inside of the navbar
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /**
   * nav data to be rendered to the navbar
   */
  navData:NavData[] = [
    {
      name:'Home',
      path:'/home'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
